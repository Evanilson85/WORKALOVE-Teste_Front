import { CityData } from '../../../../domain/repositories/city.repository';

interface CityResponseApi {
  id: string;
  nome: string;
}

export class MappersCity {
  static toDomain(city: CityResponseApi): CityData {
    return {
      id: city.id,
      name: city.nome,
    };
  }
}
