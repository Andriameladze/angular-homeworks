import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule {}
