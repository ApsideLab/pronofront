import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ScaleUpdateComponent } from './scale-update.component';
import { ScaleListComponent } from '../scale-list/scale-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScaleUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'scalesUpdate/:id', component: ScaleUpdateComponent},
      {path: 'scalesUpdate', redirectTo:'/scales'},
      {path:'scales', component: ScaleListComponent}
      ])

  ]
})
export class UpdateScaleModule {
}
