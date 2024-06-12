import { Stack, Tooltip, Typography } from "@mui/material";
import { WorkPackage } from "@qoco-sample/shared";
import moment, { Moment } from "moment";

interface WorkPackageBoxProps {
  wp: WorkPackage;
  startMDate: Moment;
}

const TooltipTitle = ({ wp }: { wp: WorkPackage }) => {
  return (
    <Stack alignItems="start" justifyContent="space-between">
      <Typography variant="body2">Name: {wp.name}</Typography>
      <Typography variant="body2">Station: {wp.station}</Typography>
      <Typography variant="body2">Area: {wp.area}</Typography>
      <Typography variant="body2">Status: {wp.status}</Typography>
      <Typography variant="body2">Start: {wp.startDateTime}</Typography>
      <Typography variant="body2">End: {wp.endDateTime}</Typography>
    </Stack>
  );
};

export const WorkPackageBox = ({ wp, startMDate }: WorkPackageBoxProps) => {
  const mStartDateTime = moment(wp.startDateTime).utc();
  const mEndDateTime = moment(wp.endDateTime).utc();
  const width = mEndDateTime.diff(mStartDateTime, "minutes");
  const left = mStartDateTime.diff(startMDate, "minutes");
  return (
    <Tooltip title={<TooltipTitle wp={wp} />} followCursor>
      <Stack
        sx={{
          width,
          height: 32,
          backgroundColor: "#9123ac",
          left,
          top: 4,
          position: "absolute",
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          {wp.name}
        </Typography>
      </Stack>
    </Tooltip>
  );
};
