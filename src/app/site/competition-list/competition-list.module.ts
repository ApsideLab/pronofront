import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionListComponent } from './competition-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSortModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatTooltipModule } from '@angular/material';
import { getFrenchPaginatorIntl } from './french-paginator-intl';
import { ToasterModule } from 'angular2-toaster';
import { ToasterComponentModule } from '../../toaster.component';

@NgModule({
  declarations: [CompetitionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ToasterModule.forRoot(),
    ToasterComponentModule,
    MatTooltipModule,
    RouterModule.forChild([
      { path: 'contests', component: CompetitionListComponent },
      ])
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() }
  ]
})
export class ContestModule {}
