import { API_URL } from '../constants/env';
import { RootState } from '../app/store';
import { FightResBody, Dragon } from '../../../server/models/Dragon.interface';

const getAll = async (): Promise<Dragon[]> =>
  await fetch(`${API_URL}/dragons`).then((response) => response.json());

const getBattleResult = async (playerDragon: Dragon | null, computerDragon: Dragon | null): Promise<FightResBody | null> =>
  await fetch(
    `${API_URL}/dragons/fight`,
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
