import { Flight, WorkPackage } from "@qoco-sample/shared";

export type FlightsInfo = Record<
  string,
  { flights: Flight[]; workPackages: WorkPackage[] }
>;
