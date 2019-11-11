import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionListComponent } from './competition-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { ToasterComponentModule } from '../../toaster.component';

@NgModule({
  declarations: [CompetitionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    ToasterComponentModule,
    RouterModule.forChild([
      { path: 'contests', component: CompetitionListComponent },
      ])
  ]
})
export class ContestModule {}
