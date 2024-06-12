import { Box, Stack, Typography } from "@mui/material";
import { Moment } from "moment";

interface TimelineHeaderProps {
  mDates: Moment[];
  minuteWidth: number;
}

export const TimelineHeader = ({
  mDates,
  minuteWidth,
}: TimelineHeaderProps) => {
  const border = "1px solid white";
  const hourWidth = 60 * minuteWidth;
  const dayWidth = 24 * hourWidth;

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      sx={{
        height: "100%",
        width: mDates.length * dayWidth,
      }}
    >
      {mDates.map((mDate, index) => (
        <Stack
          key={index}
          sx={{
            width: dayWidth,
            backgroundColor: index % 2 === 0 ? "transparent" : "rgba(0,0,0,0.5)",
          }}
          justifyContent="space-around"
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6">{mDate.format("YYYY-MM-DD")}</Typography>
          </Box>

          <Box
            sx={{
              width: mDates.length * dayWidth,
              position: "relative",
              height: 32,
            }}
          >
            {Array.from({ length: 24 }).map((_, index) => (
              <Stack
                key={index}
                sx={{
                  width: hourWidth,
                  top: 0,
                  left: index * hourWidth + 0.5 * hourWidth,
                  position: "absolute",
                }}
              >
                <Typography key={index} variant="body2">
                  {mDate
                    .clone()
                    .add(index + 1, "hours")
                    .format("h A")}
                </Typography>
              </Stack>
            ))}
          </Box>
          <Box
            sx={{
              width: mDates.length * dayWidth,
              position: "relative",
              height: 4,
            }}
          >
            {Array.from({ length: 48 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "1px",
                  height: 4,
                  top: 0,
                  left: index * hourWidth * 0.5,
                  position: "absolute",
                  borderRight: border,
                  backgroundColor: "white",
                }}
              />
            ))}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};
