import { createReducer } from '@reduxjs/toolkit';
import { Dragon, BattleResult } from '../models/interfaces/dragon.interface';
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

 
  // #Note: ran out of time to finish the battle part
  // builder.addCase(fetchBattleResult.fulfilled, (state, action) => {

  //   console.log(action.payload?.finished)

  //   switch (action.payload?.finished) {
  //     case false:
  //       return {
  //         ...state,
  //         battleResult: action.payload,
  //       }
  //     case true:
  //       return {
  //         ...state,
  //         selectedDragon: action.payload?.playerDragon,
  //         selectedComputerDragon: action.payload?.computerDragon,
  //         battleResult: null
  //       }
  //     default: 
  //       return {
  //         ...state,
  //       }
  //   }
  // })

  // *note: simpler version 
  builder.addCase(fetchBattleResult.fulfilled, (state, action) => ({
      ...state,
      battleResult: action.payload,
    }
  ));

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
