import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './site/login/login.component';

import { PlayerListComponent } from './site/player-list/player-list.component';
import { PlayerFormComponent } from './site/player-form/player-form.component';
import { PlayerUpdateComponent } from './site/player-update/player-update.component';

import { ActorListComponent } from './site/actor-list/actor-list.component';
import { ActorFormComponent } from './site/actor-form/actor-form.component';
import { ActorUpdateComponent } from './site/actor-update/actor-update.component';

import { ScaleListComponent } from './site/scale-list/scale-list.component';
import { ScaleFormComponent } from './site/scale-form/scale-form.component';
import { ScaleUpdateComponent } from './site/scale-update/scale-update.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component : HomeComponent,canActivate: [AuthGuard]},

  { path: 'players',component: PlayerListComponent },
  { path: 'addplayers',component: PlayerFormComponent },
  {path: 'playersUpdate/:id', component: PlayerUpdateComponent},

  { path: 'actors',component: ActorListComponent },
  { path: 'addactors',component: ActorFormComponent },
  {path: 'actorsUpdate/:id', component: ActorUpdateComponent},

  { path: 'scales',component: ScaleListComponent },
  { path: 'addscales',component: ScaleFormComponent },
  {path: 'scalesUpdate/:id', component:ScaleUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
