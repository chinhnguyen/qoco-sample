import { Box, Stack } from "@mui/material";
import { FlightsInfo } from "../common/types";
import { Moment } from "moment";
import { FlightBox } from "./FlightBox";
import { WorkPackageBox } from "./WorkPackageBox";

interface TimelineContentProps {
  mDates: Moment[];
  flights: FlightsInfo;
  minuteWidth: number;
  flightHeight: number;
}

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
          {flights[registration].workPackages.map((wp) => (
            <WorkPackageBox
              key={wp.workPackageId}
              wp={wp}
              startMDate={dates[0]}
            />
          ))}
        </Box>
      ))}
    </Stack>
  );
};
