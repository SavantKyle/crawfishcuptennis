import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripePaymentService } from '../../services/stripepayment.service';
import { RegisterService } from '../../services/register.service';
import { Team } from '../../models/team';
import { ITeam } from '../../models/ITeam';

const $: JQuery = require('jquery');

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    team: Team = new Team();
    hideP7: boolean = true;
    hideP8: boolean = true;

    stripePublicKey: string = 'pk_live_YTAJamai0WYE4rpdMW2KTaB3';
    paymentAmount: number = Date.now() < Date.parse('4/1/2017') ? 45000 : 51000;
    takePaymentResult: string;

    constructor(private stripePaymentService: StripePaymentService, private registerService: RegisterService,
        private router: Router, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    addPlayer(): void {
        if (this.hideP7 && this.hideP8) {
            this.hideP7 = false;
        } else if (this.hideP8 && !this.hideP7) {
            this.hideP8 = false;
        }

        this.showRemovePlayer();
        // Each Additional Player add $25 (2500 = $25 in Stripe)
        this.paymentAmount += 2500;
    }

    removePlayer(): void {
        if (!this.hideP7 && !this.hideP8) {
            this.hideP8 = true;
        } else if (!this.hideP7 && this.hideP8) {
            this.hideP7 = true;
        }

        this.showRemovePlayer();
        // Each Removed Player deduct $25 (2500 = $25 in Stripe)
        this.paymentAmount -= 2500;
    }

    showRemovePlayer(): void {
        if (!this.hideP7 && !this.hideP8) {
            document.getElementById('removePlayer7').hidden = true;
        } else if (this.hideP8) {
            document.getElementById('removePlayer7').hidden = false;
        }
    }

    buildForm(): void {
        this.registerForm = this.fb.group({
            teamName: [this.team.teamName, Validators.required],
            division: [this.team.division, Validators.required],
            firstName1: [this.team.firstName1, Validators.required],
            lastName1: [this.team.lastName1, Validators.required],
            cellPhone1: [this.team.cellPhone1, Validators.required],
            email1: [this.team.email1, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp1: [this.team.ntrp1, Validators.required],
            firstName2: [this.team.firstName2, Validators.required],
            lastName2: [this.team.lastName2, Validators.required],
            cellPhone2: [this.team.cellPhone2, Validators.required],
            email2: [this.team.email2, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp2: [this.team.ntrp2, Validators.required],
            firstName3: [this.team.firstName3, Validators.required],
            lastName3: [this.team.lastName3, Validators.required],
            cellPhone3: [this.team.cellPhone3, Validators.required],
            email3: [this.team.email3, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp3: [this.team.ntrp3, Validators.required],
            firstName4: [this.team.firstName4, Validators.required],
            lastName4: [this.team.lastName4, Validators.required],
            cellPhone4: [this.team.cellPhone4, Validators.required],
            email4: [this.team.email4, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp4: [this.team.ntrp4, Validators.required],
            firstName5: [this.team.firstName5, Validators.required],
            lastName5: [this.team.lastName5, Validators.required],
            cellPhone5: [this.team.cellPhone5, Validators.required],
            email5: [this.team.email5, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp5: [this.team.ntrp5, Validators.required],
            firstName6: [this.team.firstName6, Validators.required],
            lastName6: [this.team.lastName6, Validators.required],
            cellPhone6: [this.team.cellPhone6, Validators.required],
            email6: [this.team.email6, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]')]],
            ntrp6: [this.team.ntrp6, Validators.required],
            firstName7: this.team.firstName7,
            lastName7: this.team.lastName7,
            cellPhone7: this.team.cellPhone7,
            email7: this.team.email7,
            ntrp7: this.team.ntrp7,
            firstName8: this.team.firstName8,
            lastName8: this.team.lastName8,
            cellPhone8: this.team.cellPhone8,
            email8: this.team.email8,
            ntrp8: this.team.ntrp8
        });

        this.registerForm.valueChanges.subscribe(data => this.setValidationMessage(data));

        this.setValidationMessage();
    }

    setValidationMessage(data?: any) {
        if (!this.registerForm) { return; }
        const form = this.registerForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any) 
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && !control.valid && !control.pristine || control && !control.valid && control.touched) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    checkValidationOnSubmit(data?: any) {
        if (!this.registerForm) { return; }
        const form = this.registerForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any) 
            this.formErrors[field] = '';
            const control = form.get(field);

            // Because the html validation messages have *ngIf restricting display to only fields that have been touched. 
            // Force all fields being validated to TOUCHED
            control.markAsTouched();

            if (control && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'teamName': '',
        'division': '',
        'firstName1': '',
        'lastName1': '',
        'cellPhone1': '',
        'email1': '',
        'ntrp1': '',
        'firstName2': '',
        'lastName2': '',
        'cellPhone2': '',
        'email2': '',
        'ntrp2': '',
        'firstName3': '',
        'lastName3': '',
        'cellPhone3': '',
        'email3': '',
        'ntrp3': '',
        'firstName4': '',
        'lastName4': '',
        'cellPhone4': '',
        'email4': '',
        'ntrp4': '',
        'firstName5': '',
        'lastName5': '',
        'cellPhone5': '',
        'email5': '',
        'ntrp5': '',
        'firstName6': '',
        'lastName6': '',
        'cellPhone6': '',
        'email6': '',
        'ntrp6': ''
    };

    validationMessages = {
        'teamName': { 'required': 'Please enter a team name.' },
        'division': { 'required': 'Please select a division for your team.' },
        'firstName1': { 'required': 'Please enter a first name for Player 1.' },
        'lastName1': { 'required': 'Please enter a last name for Player 1.' },
        'cellPhone1': { 'required': 'Please enter a cell phone number for Player 1.' },
        'email1': {
            'required': 'Please enter an email for Player 1.',
            'pattern': 'Please enter a valid email address for Player 1. (i.e. - john@gmail.com).'
        },
        'ntrp1': { 'required': 'You must select an NTRP rating for player 1.' },
        'firstName2': { 'required': 'Please enter a first name for Player 2.' },
        'lastName2': { 'required': 'Please enter a last name for Player 2.' },
        'cellPhone2': { 'required': 'Please enter a cell phone number for Player 2.' },
        'email2': {
            'required': 'Please enter an email for Player 2.',
            'pattern': 'Please enter a valid email address for Player 2. (i.e. - john@gmail.com).'
        },
        'ntrp2': { 'required': 'You must select an NTRP rating for player 2.' },
        'firstName3': { 'required': 'Please enter a first name for Player 3.' },
        'lastName3': { 'required': 'Please enter a last name for Player 3.' },
        'cellPhone3': { 'required': 'Please enter a cell phone number for Player 3.' },
        'email3': {
            'required': 'Please enter an email for Player 3.',
            'pattern': 'Please enter a valid email address for Player 3. (i.e. - john@gmail.com).'
        },
        'ntrp3': { 'required': 'You must select an NTRP rating for player 3.' },
        'firstName4': { 'required': 'Please enter a first name for Player 4.' },
        'lastName4': { 'required': 'Please enter a last name for Player 4.' },
        'cellPhone4': { 'required': 'Please enter a cell phone number for Player 4.' },
        'email4': {
            'required': 'Please enter an email for Player 4.',
            'pattern': 'Please enter a valid email address for Player 4. (i.e. - john@gmail.com).'
        },
        'ntrp4': { 'required': 'You must select an NTRP rating for player 4.' },
        'firstName5': { 'required': 'Please enter a first name for Player 5.' },
        'lastName5': { 'required': 'Please enter a last name for Player 5.' },
        'cellPhone5': { 'required': 'Please enter a cell phone number for Player 5.' },
        'email5': {
            'required': 'Please enter an email for Player 5.',
            'pattern': 'Please enter a valid email address for Player 5. (i.e. - john@gmail.com).'
        },
        'ntrp5': { 'required': 'You must select an NTRP rating for player 5.' },
        'firstName6': { 'required': 'Please enter a first name for Player 6.' },
        'lastName6': { 'required': 'Please enter a last name for Player 6.' },
        'cellPhone6': { 'required': 'Please enter a cell phone number for Player 6.' },
        'email6': {
            'required': 'Please enter an email for Player 6.',
            'pattern': 'Please enter a valid email address for Player 6. (i.e. - john@gmail.com).'
        },
        'ntrp6': { 'required': 'You must select an NTRP rating for player 6.' }
    };

    registerTeam() {
        if (!this.registerForm.valid) {
            return;
        }

        const teamName = this.registerForm.controls['teamName'].value;
        const division = this.registerForm.controls['division'].value;
        const itemDescription: string = teamName + ' - ' + division;

        this.openCheckout(itemDescription, this.paymentAmount,
            (token: StripeTokenResponse) => this.takePayment(itemDescription, this.paymentAmount, token));
    }

    takePayment(itemDescription: string, amount: number, token: StripeTokenResponse) {
        const body = {
            tokenId: token.id,
            productName: itemDescription,
            amount: amount
        };
        const bodyString = JSON.stringify(body);
        const r: Team = Object.assign({}, this.team, this.registerForm.value);
        const team: ITeam = this.registerService.mapToTeam(r, !this.hideP7, !this.hideP8);
        this.stripePaymentService.createStripePayment(bodyString).subscribe(
            (response: Response) => {
                if (response.ok) {
                    this.registerService.registerTeam(JSON.stringify(team));
                    this.registerForm.reset();
                    this.router.navigate(['/register-success']);
                }
            },
            (error: Response) => {
                console.log(error.statusText);
                alert(error.status + ' - ' + error.statusText);
            }
        );
    }

    openCheckout(itemDescription: string, amount: number, tokenCallback) {
        const handle: StripeCheckoutHandler = (<any>window).StripeCheckout.configure({
            key: this.stripePublicKey,
            locale: 'auto',
            token: tokenCallback
        });

        handle.open({
            name: '2017 Crawfish Cup',
            description: itemDescription,
            zipCode: true,
            currency: 'usd',
            amount: amount,
            panelLabel: 'Pay {{amount}}',
            allowRememberMe: false
        });
    }
}
