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

import { ScaleModule } from './site/scale-list/scale-list.module';
import { AddScaleModule } from './site/scale-form/scale-form.module';
import { UpdateScaleModule } from './site/scale-update/scale-update.module';

import { ScaleListComponent } from './site/scale-list/scale-list.component';
import { ScaleFormComponent } from './site/scale-form/scale-form.component';
import { ScaleUpdateComponent } from './site/scale-update/scale-update.component';


import { EvenementModule } from './site/evenement-list/evenement-list.module';
import { AddEvenementModule } from './site/evenement-form/evenement-form.module';
import { UpdateEvenementModule } from './site/evenement-update/evenement-update.module';

import { CompetitionListComponent } from './site/competition-list/competition-list.component';
import { AddContestModule } from './site/competition-form/competition-form.module'

import { EvenementListComponent } from './site/evenement-list/evenement-list.component';
import { EvenementFormComponent } from './site/evenement-form/evenement-form.component';
import { EvenementUpdateComponent } from './site/evenement-update/evenement-update.component';

import { CustomMaterialModule } from './site/custom-material/custom-material.module';
import { ConfirmDialogComponent } from './site/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

import { LOCALE_ID } from '@angular/core';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    CompetitionListComponent,
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

    ScaleModule,
    AddScaleModule,
    UpdateScaleModule,

    EvenementModule,
    AddEvenementModule,
    UpdateEvenementModule,

    AddContestModule,

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
  providers: [{provide: LOCALE_ID, useValue: "fr-CA"}],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
