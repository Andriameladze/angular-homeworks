import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginListComponent } from './components/login-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginListComponent }]),
  ],
})
export class LoginListModule {}
