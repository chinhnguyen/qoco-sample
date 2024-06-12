import { Box, Stack, Typography } from "@mui/material";
import { FlightsInfo } from "../common/types";

interface FlightsHeaderProp {
  flights: FlightsInfo;
  flightHeight: number;
}

export const FlightsHeader = ({ flights, flightHeight }: FlightsHeaderProp) => {
  const border = "1px solid white";
  return (
    <Stack>
      {Object.keys(flights).map((registration) => (
        <Box
          key={registration}
          sx={{
            height: flightHeight,
            borderBottom: border,
            display: "flex",
            alignItems: "center",
            paddingX: 1,
          }}
        >
          <Typography variant="body2">{registration}</Typography>
        </Box>
      ))}
    </Stack>
  );
};
