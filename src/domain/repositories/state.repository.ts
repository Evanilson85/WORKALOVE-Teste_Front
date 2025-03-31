export interface StateData {
  id: string;
  name: string;
}

export interface StateRepository {
  getAllState(): Promise<StateData[]>;
}
