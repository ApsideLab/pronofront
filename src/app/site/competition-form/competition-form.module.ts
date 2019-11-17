import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionFormComponent } from './competition-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  declarations: [CompetitionFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    RouterModule.forChild([
        { path: 'addcontests', component: CompetitionFormComponent },
      ])
  ]
})
export class AddContestModule {}
