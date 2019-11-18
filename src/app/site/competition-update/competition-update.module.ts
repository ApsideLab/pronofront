import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionUpdateComponent } from './competition-update.component';
import { CompetitionListComponent } from '../competition-list/competition-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompetitionUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'updateContest/:id', component: CompetitionUpdateComponent},
      {path: 'updateContest', redirectTo:'/contests'}
      ])

  ]
})

export class UpdateContestModule {
}
