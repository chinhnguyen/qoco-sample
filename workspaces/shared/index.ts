export interface GetFlightsOptions {
  skip?: number;
  take?: number;
}

export interface Flight {
  flightId: number;
  airline: string;
  registration: string;
  aircraftType: string;
  flightNum: string;
  schedDepTime?: Date;
  schedArrTime?: Date;
  actualDepTime?: Date;
  actualArrTime?: Date;
  estimatedDepTime?: Date;
  estimatedArrTime?: Date;
  schedDepStation?: string;
  schedArrStation?: string;
  depStand?: string;
  origDepStand?: string;
  arrStand?: string;
  origArrStand?: string;
}

export interface GetFlightsResponse {
  data: Flight[];
  count: number;
}
