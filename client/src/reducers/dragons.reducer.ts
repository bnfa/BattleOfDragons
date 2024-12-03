import { createReducer } from '@reduxjs/toolkit';
import { Dragon, BattleResult } from '../../../server/models/Dragon.interface';
import { fetchDragonsData, fetchBattleResult, setSelectedDragon, setSelectedComputerDragon } from './dragons.actions';

interface DragonState {
  dragons: Dragon[];
  selectedDragon: Dragon | null;
  selectedComputerDragon: Dragon | null;
  battleResult: BattleResult | null;
}

const initialState: DragonState = {
  dragons: [],
  selectedDragon: null,
  selectedComputerDragon: null,
  battleResult: null
};

export const dragonsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchDragonsData.pending, (state) => ({
    ...state,
    dragons: [],
  }));

  builder.addCase(fetchDragonsData.rejected, (state) => ({
    ...state,
    dragons: [],
  }));

  builder.addCase(fetchDragonsData.fulfilled, (state, action) => ({
    ...state,
    dragons: action.payload,
  }));

  builder.addCase(fetchBattleResult.pending, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.rejected, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.fulfilled, (state, action) => {

    if (action.payload?.winner) {

      return {
        ...state,
        battleResult: {
          winner: action.payload.winner,
          tie: action.payload.tie,
          computerDragon: action.payload.computerDragon,
          playerDragon: action.payload.playerDragon

        }
      }
    } else {
      return {
        ...state,
        battleResult: null,
        selectedDragon: action.payload!.playerDragon,
        selectedComputerDragon: action.payload!.computerDragon
      }
    }
  })

  builder.addCase(setSelectedDragon, (state, action) => ({
    ...state,
    selectedDragon: action.payload,
    battleResult: null
  }));

  builder.addCase(setSelectedComputerDragon, (state, action) => ({
    ...state,
    selectedComputerDragon: action.payload,
  }));
});
