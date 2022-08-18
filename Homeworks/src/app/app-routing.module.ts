import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LoginAccessGuard } from './guards/login-access.guard';
import { LoginGuard } from './guards/login.guard';
import { HttpComponent } from './http/http.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginListComponent } from './login-list/login-list.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: LoginFormComponent,
  },
  {
    path: 'login',
    component: LoginUserComponent,
    canActivate: [LoginAccessGuard],
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employee-form/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'users',
    component: LoginListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'currency',
    component: HttpComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
