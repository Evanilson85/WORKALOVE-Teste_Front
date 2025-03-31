import { StateData, StateRepository } from '../../../domain/repositories/state.repository';
import { axiosRequest } from '../api/axios';
import { MappersState } from './mappers/mappers.state';

const URL = 'http://servicodados.ibge.gov.br/api/v1/localidades/';

export class AxiosStateRepository implements StateRepository {
  async getAllState(): Promise<StateData[]> {
    const { data } = await axiosRequest({ baseUrl: URL }).get('estados');

    return data.map(MappersState.toDomain);
  }
}
