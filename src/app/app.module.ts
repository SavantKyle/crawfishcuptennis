import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { TheCauseComponent } from './components/the-cause/the-cause.component';
import { InformationComponent } from './components/information/information.component';
import { RegisterComponent } from './components/register/register.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

import { StripePaymentService } from './services/stripepayment.service';
import { RegisterService } from './services/register.service';

import { routes } from '../Routes';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TheCauseComponent,
        InformationComponent,
        RegisterComponent,
        NavmenuComponent,
        RegisterSuccessComponent,
        SponsorsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
  ],
    providers: [
        StripePaymentService,
        RegisterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
