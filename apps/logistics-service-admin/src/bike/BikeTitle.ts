import { Bike as TBike } from "../api/bike/Bike";

export const BIKE_TITLE_FIELD = "id";

export const BikeTitle = (record: TBike): string => {
  return record.id?.toString() || String(record.id);
};
