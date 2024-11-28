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
};