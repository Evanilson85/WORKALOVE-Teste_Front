import { StateData } from '../../../../domain/repositories/state.repository';

interface StateResponseApi {
  id: string;
  sigla: string;
}

export class MappersState {
  static toDomain(state: StateResponseApi): StateData {
    return {
      id: state.id,
      name: state.sigla,
    };
  }
}
