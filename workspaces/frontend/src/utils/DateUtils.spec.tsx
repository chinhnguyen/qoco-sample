import { createMDatesList } from "./DateUtils";

describe("createMDatesList", () => {
  it("should return a list of dates between the start and end date", () => {
    const dates = createMDatesList(
      "2024-04-15T02:30:00.000Z",
      "2024-04-20T06:15:00.000Z"
    );

    expect(dates.map((m) => m.toISOString())).toEqual([
      "2024-04-15T00:00:00.000Z",
      "2024-04-16T00:00:00.000Z",
      "2024-04-17T00:00:00.000Z",
      "2024-04-18T00:00:00.000Z",
      "2024-04-19T00:00:00.000Z",
      "2024-04-20T00:00:00.000Z",
    ]);
  });
});
