import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyGuard } from './core/guards/currency.guard';
import { LoginAccessGuard } from './core/guards/login-access.guard';
import { LoginGuard } from './core/guards/login.guard';
import { HttpComponent } from './http/http.component';
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
    loadChildren: () =>
      import('./features/login-form/login-form.module').then(
        (m) => m.LoginFormModule
      ),
  },
  {
    path: 'login',
    component: LoginUserComponent,
    canActivate: [LoginAccessGuard],
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employee-form/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: 'users',
    component: LoginListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'currency',
    component: HttpComponent,
    canActivate: [LoginGuard, CurrencyGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
