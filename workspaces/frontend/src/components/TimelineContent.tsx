import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { FlightsInfo } from "../common/types";
import { Flight } from "@qoco-sample/shared";
import moment, { Moment } from "moment";

interface TimelineContentProps {
  mDates: Moment[];
  flights: FlightsInfo;
  minuteWidth: number;
  flightHeight: number;
}

interface FlightBoxProps {
  flight: Flight;
  startMDate: Moment;
}

const FlightBoxTooltipTitle = ({ flight }: { flight: Flight }) => {
  return (
    <Stack alignItems="start" justifyContent="space-between">
      <Typography variant="body2">
        Flight num: {flight.airline}
        {flight.flightNum}
      </Typography>
      <Typography variant="body2">
        Aircraft type: {flight.aircraftType}
      </Typography>
      <Typography variant="body2">
        Sched dep time: {flight.schedDepTime}
      </Typography>
      <Typography variant="body2">
        Sched arr time: {flight.schedArrTime}
      </Typography>
    </Stack>
  );
};

const FlightBox = ({ flight, startMDate }: FlightBoxProps) => {
  const mSchedDepTime = moment(flight.schedDepTime).utc();
  const mSchedArrTime = moment(flight.schedArrTime).utc();
  const showAllWidth = 130;
  const showNoneWidth = 80;
  const width = mSchedArrTime.diff(mSchedDepTime, "minutes");
  const left = mSchedDepTime.diff(startMDate, "minutes");
  return (
    <Tooltip title={<FlightBoxTooltipTitle flight={flight} />} followCursor>
      <Stack
        sx={{
          width,
          height: 32,
          backgroundColor: "blue",
          left,
          top: 4,
          position: "absolute",
        }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {width <= showNoneWidth ? (
          <></>
        ) : width < showAllWidth ? (
          <>
            <Typography variant="body2" sx={{ width: 40, textAlign: "center" }}>
              {flight.schedDepStation}
            </Typography>
            <Typography variant="body2" sx={{ width: 40, textAlign: "center" }}>
              {flight.schedArrStation}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body2" sx={{ width: 40, textAlign: "center" }}>
              {flight.schedDepStation}
            </Typography>
            <Typography variant="body2" sx={{ flexFlow: 1 }}>
              {flight.airline}
              {flight.flightNum}
            </Typography>
            <Typography variant="body2" sx={{ width: 40, textAlign: "center" }}>
              {flight.schedArrStation}
            </Typography>
          </>
        )}
      </Stack>
    </Tooltip>
  );
};

export const TimelineContent = ({
  mDates: dates,
  flights,
  minuteWidth,
  flightHeight,
}: TimelineContentProps) => {
  const border = "1px solid white";
  const hourWidth = 60 * minuteWidth;
  const dayWidth = 24 * hourWidth;

  if (dates.length === 0) {
    return;
  }

  return (
    <Stack>
      {Object.keys(flights).map((registration) => (
        <Box
          key={registration}
          sx={{
            height: flightHeight,
            width: dates.length * dayWidth,
            borderBottom: border,
            position: "relative",
          }}
        >
          {flights[registration].flights.map((flight) => (
            <FlightBox
              key={flight.flightId}
              flight={flight}
              startMDate={dates[0]}
            />
          ))}
        </Box>
      ))}
    </Stack>
  );
};
