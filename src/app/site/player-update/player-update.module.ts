import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PlayerUpdateComponent } from './player-update.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlayerUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'playersUpdate/:id', component: PlayerUpdateComponent },
      { path: 'playersUpdate/', redirectTo: ['players']}
      ])

  ]
})
export class UpdatePlayerModule {
}
