import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { CompetitionListComponent } from '../competition-list/competition-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatTooltipModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {path: 'contests/:id', component: CompetitionComponent},
      //{path: 'contest', redirectTo:'/contests'},
      {path:'contests', component: CompetitionListComponent}
      ])
  ]
})
export class CompetitionModule { }
