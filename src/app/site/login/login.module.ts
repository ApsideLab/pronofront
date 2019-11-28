import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';



// const LoginRoutes = [
//   { path: '', component: LoginComponent},
//   { path: 'login', component: LoginComponent}
// ];

const LoginRoutes: Routes = [
  // { path: '', canActivate: [AuthGuard], component: HomeComponent }
  { path: 'login', component: LoginComponent},
  { path: 'login/signup', component: RegisterComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LoginRoutes)
  ]
})
export class LoginModule {}

