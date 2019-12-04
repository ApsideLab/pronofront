import { NgModule } from '@angular/core';
import { ScaleFormComponent } from './scale-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ScaleFormComponent],
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
          { path: 'addscales', component: ScaleFormComponent },
        ])
    ]
  })
  export class AddScaleModule {}