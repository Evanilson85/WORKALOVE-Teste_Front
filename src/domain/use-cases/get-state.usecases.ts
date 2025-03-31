import { StateData, StateRepository } from '../repositories/state.repository';

export class GetStateUseCase {
  constructor(private stateRepository: StateRepository) {}

  async execute(): Promise<StateData[]> {
    return await this.stateRepository.getAllState();
  }
}
