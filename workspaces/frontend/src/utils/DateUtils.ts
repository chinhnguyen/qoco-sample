import moment, { Moment } from "moment";

export function createMDatesList(
  strStartDate: string,
  strEndDate: string
): Moment[] {
  const mDates: Moment[] = [];
  const mFirstDate = moment(strStartDate).utc().startOf("day");
  const mLastDate = moment(strEndDate).utc().startOf("day");
  let mCurrentDate = mFirstDate;
  while (mCurrentDate <= mLastDate) {
    mDates.push(mCurrentDate);
    mCurrentDate = mCurrentDate.clone().add(1, "days");
  }
  return mDates;
}
