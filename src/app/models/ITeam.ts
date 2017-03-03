import { IPlayer } from './IPlayer';

export interface ITeam {
    teamName: string;
    division: string;
    players: IPlayer[];
}
