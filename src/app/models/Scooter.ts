interface IScooter {
  id: number;
  registration_code: string;
  is_busy: number;
  last_use_time: string;
  total_ride_kilometers: number;
}

export { IScooter };
