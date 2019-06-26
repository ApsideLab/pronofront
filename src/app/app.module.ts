import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './site/home/home.module';
import { PronosticsModule } from './site/pronostics/pronostics.module';
import { ResultatsModule } from './site/resultats/resultats.module';
import { AdminModule } from './site/admin/admin.module';
import { ErrorsModule } from './site/errors/errors.module';
import { SharedModule } from './site/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './site/material/material.module';
import { LoginModule } from './site/login/login.module';
import { CompetitionModule } from './site/competition/competition.module';

import { PlayerModule } from './site/player-list/player-list.module';
import { AddPlayerModule } from './site/player-form/player-form.module';
import { UpdatePlayerModule } from './site/player-update/player-update.module';

import { PlayerListComponent } from './site/player-list/player-list.component';
import { PlayerFormComponent } from './site/player-form/player-form.component';
import { PlayerUpdateComponent } from './site/player-update/player-update.component';


import { ActorModule } from './site/actor-list/actor-list.module';
import { AddActorModule } from './site/actor-form/actor-form.module';
import { UpdateActorModule } from './site/actor-update/actor-update.module';

import { ActorListComponent } from './site/actor-list/actor-list.component';
import { ActorFormComponent } from './site/actor-form/actor-form.component';
import { ActorUpdateComponent } from './site/actor-update/actor-update.component';

import { CustomMaterialModule } from './site/custom-material/custom-material.module';
import { ConfirmDialogComponent } from './site/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    LoginModule,
    PlayerModule,
    AddPlayerModule,
    UpdatePlayerModule,
    ActorModule,
    AddActorModule,
    UpdateActorModule,
    SharedModule,
    MatDialogModule,
    HomeModule,
    PronosticsModule,
    ResultatsModule,
    AdminModule,
    CompetitionModule,
    ErrorsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
