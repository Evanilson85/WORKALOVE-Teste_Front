export interface CityData {
  id: string;
  name: string;
}

export interface CityRepository {
  getAllCity(idState: string): Promise<CityData[]>;
}
