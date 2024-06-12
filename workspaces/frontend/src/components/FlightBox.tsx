import { Stack, Tooltip, Typography } from "@mui/material";
import { Flight } from "@qoco-sample/shared";
import moment, { Moment } from "moment";

interface FlightBoxProps {
  flight: Flight;
  startMDate: Moment;
}

const TooltipTitle = ({ flight }: { flight: Flight }) => {
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

export const FlightBox = ({ flight, startMDate }: FlightBoxProps) => {
  const mSchedDepTime = moment(flight.schedDepTime).utc();
  const mSchedArrTime = moment(flight.schedArrTime).utc();
  const showAllWidth = 130;
  const showNoneWidth = 80;
  const width = mSchedArrTime.diff(mSchedDepTime, "minutes");
  const left = mSchedDepTime.diff(startMDate, "minutes");
  return (
    <Tooltip title={<TooltipTitle flight={flight} />} followCursor>
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
