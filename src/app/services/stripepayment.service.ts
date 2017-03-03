import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StripePaymentService
{
    private stripePaymentUrl = 'https://crawfishcuptennis.com/api/stripepayment';

    constructor(private http: Http) { }

    createStripePayment(bodyString: string): Observable<Response>
    {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.stripePaymentUrl, bodyString, options);
    }
}
