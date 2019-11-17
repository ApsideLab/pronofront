import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassementComponent } from './classement.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'classements', canActivate: [AuthGuard], component: ClassementComponent }
];

@NgModule({
  declarations: [ClassementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ],
  exports:[CommonModule, ClassementComponent]
})
export class ClassementModule { }
