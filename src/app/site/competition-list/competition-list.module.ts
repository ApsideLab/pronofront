import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionListComponent } from './competition-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSortModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import { getFrenchPaginatorIntl } from './french-paginator-intl';

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
    RouterModule.forChild([
      { path: 'contests', component: CompetitionListComponent },
      ])
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() }
  ]
})
export class ContestModule {}
