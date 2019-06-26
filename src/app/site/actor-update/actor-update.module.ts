import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ActorUpdateComponent } from './actor-update.component';
import { ActorListComponent } from '../actor-list/actor-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActorUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'actorsUpdate/:id', component: ActorUpdateComponent},
      {path: 'actorsUpdate', redirectTo:'/actors'},
      {path:'actors', component: ActorListComponent}
      ])

  ]
})
export class UpdateActorModule {
}
