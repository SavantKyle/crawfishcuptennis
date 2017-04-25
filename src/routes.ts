import { Routes } from '@angular/router';

import { AppComponent } from './app/components/app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { SponsorsComponent } from './app/components/sponsors/sponsors.component';
import { InformationComponent } from './app/components/information/information.component';
import { NavmenuComponent } from './app/components/navmenu/navmenu.component';
import { RegisterComponent } from './app/components/register/register.component';
import { TheCauseComponent } from './app/components/the-cause/the-cause.component';
import { RegisterSuccessComponent } from './app/components/register-success/register-success.component';
import { ScheduleComponent } from './app/components/schedule/schedule.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sponsors', component: SponsorsComponent },
    { path: 'information', component: InformationComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'the-cause', component: TheCauseComponent },
    { path: 'register-success', component: RegisterSuccessComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
