import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './site/login/login.component';
import { PlayerListComponent } from './site/player-list/player-list.component';
import { PlayerFormComponent } from './site/player-form/player-form.component';
import { PlayerUpdateComponent } from './site/player-update/player-update.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component : HomeComponent,canActivate: [AuthGuard]},
  { path: 'players',component: PlayerListComponent },
  { path: 'addplayers',component: PlayerFormComponent },
  {path: 'playersUpdate/:id', component: PlayerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
