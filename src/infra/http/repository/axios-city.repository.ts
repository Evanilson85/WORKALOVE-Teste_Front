import { CityData, CityRepository } from '../../../domain/repositories/city.repository';
import { axiosRequest } from '../api/axios';
import { MappersCity } from './mappers/mappers.city';

const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/';

export class AxiosCityRepository implements CityRepository {
  async getAllCity(idState: string): Promise<CityData[]> {
    const { data } = await axiosRequest({ baseUrl: URL }).get(`estados/${idState}/municipios`);

    return data.map(MappersCity.toDomain);
  }
}
