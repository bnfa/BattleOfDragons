export interface Dragon {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
}

export interface BattleResult {
  tie: boolean;
  winner: Dragon;
  playerDragon: Dragon;
  computerDragon: Dragon;
};

export interface FightReqBody {
  playerDragon: Dragon;
  computerDragon: Dragon;
}

export interface FightResBody {
  tie: boolean;
  winner: Dragon | null;
  playerDragon: Dragon;
  computerDragon: Dragon;
  message?: string;
}