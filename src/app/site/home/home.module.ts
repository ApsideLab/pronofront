import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ClassementModule } from '../classement/classement.module';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClassementModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
