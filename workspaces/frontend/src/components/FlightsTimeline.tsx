import { Box, Stack, useTheme } from "@mui/material";
import { useGetFlightsQuery } from "../apis";
import { createMDatesList } from "../utils/DateUtils";
import { TimelineHeader } from "./TimelineHeader";
import { FlightsHeader } from "./FlightsHeader";
import { TimelineContent } from "./TimelineContent";
import { useMemo } from "react";
import { FlightsInfo } from "../common/types";

export const FlightsTimeline = () => {
  const header = {
    minHeight: 80,
    height: 80,
    width: 180,
    minWidth: 180,
  };
  const minuteWidth = 1;
  const flightHeight = 40;
  const border = "1px solid white";

  const theme = useTheme();
  const { data: flightsData } = useGetFlightsQuery({
    take: 1000,
  });

  const mDates = useMemo(() => {
    if (!flightsData) return [];
    return createMDatesList(
      flightsData.data[0].schedDepTime ?? "",
      flightsData.data[flightsData.data.length - 1].schedArrTime ?? ""
    );
  }, [flightsData]);

  const flightsInfo: FlightsInfo = useMemo(() => {
    const info: FlightsInfo = {};

    if (!flightsData) return info;
    return flightsData.data.reduce((acc, flight) => {
      const registration = flight.registration;
      if (!info[registration]) {
        info[registration] = { flights: [] };
      }
      info[registration].flights.push(flight);
      return acc;
    }, info);
  }, [flightsData]);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        paddingY: 2,
      }}
    >
      <Stack sx={{ overflow: "hidden" }} direction="row">
        <Box sx={{ ...header }} />
        <Box
          sx={{
            overflowX: "auto",
            height: header.height,
            minHeight: header.minHeight,
            border,
          }}
        >
          <TimelineHeader mDates={mDates} minuteWidth={minuteWidth} />
        </Box>
      </Stack>
      <Stack
        sx={{
          overflow: "hidden",
          height: `calc(100% - ${theme.spacing(14)})`,
        }}
        direction="row"
      >
        <Box
          sx={{
            overflowY: "auto",
            width: header.width,
            minWidth: header.minWidth,
            border,
          }}
        >
          <FlightsHeader flights={flightsInfo} flightHeight={flightHeight} />
        </Box>
        <Box sx={{ overflow: "auto", border }}>
          <TimelineContent
            mDates={mDates}
            flights={flightsInfo}
            minuteWidth={minuteWidth}
            flightHeight={flightHeight}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
