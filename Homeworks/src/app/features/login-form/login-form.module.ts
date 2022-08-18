import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './component/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginFormComponent }]),
  ],
})
export class LoginFormModule {}
