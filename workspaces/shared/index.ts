export interface Flight {
  flightId: number;
  airline: string;
  registration: string;
  aircraftType: string;
  flightNum: string;
  schedDepTime?: string;
  schedArrTime?: string;
  actualDepTime?: string;
  actualArrTime?: string;
  estimatedDepTime?: string;
  estimatedArrTime?: string;
  schedDepStation?: string;
  schedArrStation?: string;
  depStand?: string;
  origDepStand?: string;
  arrStand?: string;
  origArrStand?: string;
}

export interface GetFlightsOptions {
  skip?: number;
  take?: number;
}

export interface GetFlightsResponse {
  data: Flight[];
  count: number;
}

export interface WorkPackage {
  workPackageId: number;
  name: string;
  station: string;
  status: string;
  area: string;
  registration: string;
  startDateTime: string;
  endDateTime: string;
}

export interface GetWorkPackagesOptions {
  skip?: number;
  take?: number;
}

export interface GetWorkPackagesResponse {
  data: WorkPackage[];
  count: number;
}
