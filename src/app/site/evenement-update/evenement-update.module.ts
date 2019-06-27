import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EvenementUpdateComponent } from './evenement-update.component';
import { EvenementListComponent } from '../evenement-list/evenement-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EvenementUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'evenementsUpdate/:id', component: EvenementUpdateComponent},
      {path: 'evenementsUpdate', redirectTo:'/evenements'},
      {path:'evenements', component: EvenementListComponent}
      ])

  ]
})
export class UpdateEvenementModule {
}
