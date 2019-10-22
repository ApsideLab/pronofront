import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { CompetitionListComponent } from '../competition-list/competition-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'competitions', canActivate: [AuthGuard], component: CompetitionComponent }
];

@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'competitions/:id', component: CompetitionComponent},
      // {path: 'actorsUpdate', redirectTo:'/actors'},
      {path:'competitions', component: CompetitionListComponent}
      ])
  ]
})
export class CompetitionModule { }
