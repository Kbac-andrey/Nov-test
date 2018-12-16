export interface ICalendarModels {
  model: string;
  stateNumber: string;
  reservations: IReservation[];
}

export interface IReservation {
  name: string;
  price: number;
  direction: number;
}
