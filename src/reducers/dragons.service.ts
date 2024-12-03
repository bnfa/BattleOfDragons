import { API_URL } from '../constants/env';
import { BattleResult, Dragon } from '../models/interfaces/dragon.interface';
import { RootState } from '../app/store';

const getAll = async (): Promise<Dragon[]> =>
  await fetch(`${API_URL}/dragons`).then((response) => response.json());

const getBattleResult = async (playerDragon: Dragon | null, computerDragon: Dragon | null): Promise<BattleResult | null> =>
  await fetch(
    `${API_URL}/fight`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerDragon, computerDragon })
    }
  ).then((response) => response.json());
export const DragonService = {
  getAll,
  getBattleResult
};
