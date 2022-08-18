import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './components/http.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HttpComponent }]),
  ],
})
export class CurrencyModule {}
