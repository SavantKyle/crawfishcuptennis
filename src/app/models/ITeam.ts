import { IPlayer } from './IPlayer';

export interface ITeam {
    teamName: string;
    division: string;
    gender: string;
    players: IPlayer[];
}
