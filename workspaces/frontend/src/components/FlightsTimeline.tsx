import { Box, Typography } from "@mui/material";
import { useGetFlightsQuery } from "../apis";

export const FlightsTimeline = () => {
  const { data } = useGetFlightsQuery({
    take: 1000,
  });

  const flights = data?.data || [];
  // const firstDay = flights[0]?.schedDepTime;
  // const lastDay = flights[flights.length - 1]?.schedDepTime;

  return <Box></Box>;
};
