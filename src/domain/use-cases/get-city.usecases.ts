import { CityData, CityRepository } from '../repositories/city.repository';

export class GetCityUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(idState: string): Promise<CityData[]> {
    return await this.cityRepository.getAllCity(idState);
  }
}
