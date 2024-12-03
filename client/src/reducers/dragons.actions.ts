import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BattleResult, Dragon } from '../models/interfaces/dragon.interface';
import { DragonService } from './dragons.service';
import { RootState } from '../app/store';

export const fetchDragonsData = createAsyncThunk<Dragon[]>(
  'dragons/fetchDragonsData',
  DragonService.getAll,
);

export const fetchBattleResult = createAsyncThunk(
  'dragons/fetchBattleResult',
  async ({ playerDragon, computerDragon }: { playerDragon: Dragon | null, computerDragon: Dragon | null }): Promise<BattleResult | null> => {
    const response = await DragonService.getBattleResult(playerDragon, computerDragon);

    return response;
  }
);

export const setSelectedDragon = createAction<Dragon | null>(
  'dragons/setSelectedDragon',
);

export const setSelectedComputerDragon = createAction<Dragon | null>(
  'dragons/setSelectedComputerDragon',
);
