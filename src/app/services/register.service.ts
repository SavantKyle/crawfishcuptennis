import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Team } from '../models/team';
import { ITeam } from '../models/ITeam';
import { IPlayer } from '../models/IPlayer';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
    private registerUrl = 'https://crawfishcuptennis.com/api/register';
    private registerTeamUrl = 'https://crawfishcuptennis.com/api/register/team';
    registerResponse: string;

    constructor(private http: Http) { }

    registerTeam(bodyString: string): string {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        this.http.post(this.registerTeamUrl, bodyString, options).subscribe(
            (response: Response) => this.registerResponse = response.json().status,
            (error: any) => this.registerResponse = error.message
        )

        return this.registerResponse;
    }

    mapToTeam(r: any, p7Visible: boolean, p8Visible: boolean): ITeam {
        const team: ITeam = {
            teamName: r.teamName,
            division: r.division,
            players: [
                {
                    firstName: r.firstName1,
                    lastName: r.lastName1,
                    cellPhone: r.cellPhone1,
                    email: r.email1,
                    ntrp: r.ntrp1
                },
                {
                    firstName: r.firstName2,
                    lastName: r.lastName2,
                    cellPhone: r.cellPhone2,
                    email: r.email2,
                    ntrp: r.ntrp2
                },
                {
                    firstName: r.firstName3,
                    lastName: r.lastName3,
                    cellPhone: r.cellPhone3,
                    email: r.email3,
                    ntrp: r.ntrp3
                },
                {
                    firstName: r.firstName4,
                    lastName: r.lastName4,
                    cellPhone: r.cellPhone4,
                    email: r.email4,
                    ntrp: r.ntrp4
                },
                {
                    firstName: r.firstName5,
                    lastName: r.lastName5,
                    cellPhone: r.cellPhone5,
                    email: r.email5,
                    ntrp: r.ntrp5
                },
                {
                    firstName: r.firstName6,
                    lastName: r.lastName6,
                    cellPhone: r.cellPhone6,
                    email: r.email6,
                    ntrp: r.ntrp6
                }
            ]
        };

        if (p7Visible) {
            team.players.push({
                firstName: r.firstName7,
                lastName: r.lastName7,
                cellPhone: r.cellPhone7,
                email: r.email7,
                ntrp: r.ntrp7
            })
        }

        if (p8Visible) {
            team.players.push({
                firstName: r.firstName8,
                lastName: r.lastName8,
                cellPhone: r.cellPhone8,
                email: r.email8,
                ntrp: r.ntrp8
            })
        }

        return team;
    }
}
