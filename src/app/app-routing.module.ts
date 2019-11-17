import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './site/player-list/player-list.component';
import { PlayerFormComponent } from './site/player-form/player-form.component';
import { PlayerUpdateComponent } from './site/player-update/player-update.component';

import { ActorListComponent } from './site/actor-list/actor-list.component';
import { ActorFormComponent } from './site/actor-form/actor-form.component';
import { ActorUpdateComponent } from './site/actor-update/actor-update.component';

import { ScaleListComponent } from './site/scale-list/scale-list.component';
import { ScaleFormComponent } from './site/scale-form/scale-form.component';
import { ScaleUpdateComponent } from './site/scale-update/scale-update.component';

import { EvenementListComponent } from './site/evenement-list/evenement-list.component';
import { EvenementFormComponent } from './site/evenement-form/evenement-form.component';
import { EvenementUpdateComponent } from './site/evenement-update/evenement-update.component';

import { CompetitionListComponent } from './site/competition-list/competition-list.component';
import { CompetitionFormComponent } from './site/competition-form/competition-form.component';
import { CompetitionComponent } from './site/competition/competition.component';
import { CompetitionUpdateComponent } from './site/competition-update/competition-update.component';
import { UserComponent } from './site/user/user.component';
import { RegisterComponent } from './site/register/register.component';
import { HomeComponent } from './site/home/home.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: '', component: HomeComponent },
  // { path: 'login/signup', component: RegisterComponent},
  // { path: 'signup', component: RegisterComponent},


  { path: 'players', component: PlayerListComponent },
  { path: 'addplayers',component: PlayerFormComponent },
 // {path: 'playersUpdate/:id', component: PlayerUpdateComponent},

  { path: 'actors', component: ActorListComponent },
  { path: 'addactors', component: ActorFormComponent },
  {path: 'actorsUpdate/:id', component: ActorUpdateComponent},

  { path: 'scales', component: ScaleListComponent },
  { path: 'addscales', component: ScaleFormComponent },
  { path: 'scalesUpdate/:id', component:ScaleUpdateComponent},

  { path: 'evenements', component: EvenementListComponent },
  { path: 'addevenements', component: EvenementFormComponent },
  { path: 'evenementsUpdate/:id', component:EvenementUpdateComponent},

  // { path: 'addcontests', component: CompetitionFormComponent },
  // { path: 'contest/:id', component: CompetitionComponent},
  // { path: 'updateContest/:id', component: CompetitionUpdateComponent},

  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
