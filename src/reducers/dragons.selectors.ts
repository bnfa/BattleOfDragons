import { RootState } from '../app/store';

export const selectDragons = (state: RootState) => state.dragons.dragons;

export const selectSelectedDragons = (state: RootState) =>
  state.dragons.selectedDragon;
export const selectedComputerDragons = (state: RootState) =>
  state.dragons.selectedComputerDragon;
export const battleResult = (state: RootState) =>
  state.dragons.battleResult;
