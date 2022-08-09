import { Component, Input, OnInit } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  constructor(private currencyService: CurrencyapiService) {}

  public data: any = new BehaviorSubject('');

  input1: any = new BehaviorSubject('');
  input2: any = new BehaviorSubject('');
  currency1: any;
  currency2: any;

  ngOnInit(): void {
    this.data.subscribe({
      next: (v: any) => console.log(this.input1),
      complete: () => console.log('Completed'),
    });

    // console.log(this.input1);
  }

  // public onClick() {
  //   this.currencyService
  //     .getCurrency()
  //     .pipe(tap((response) => (this.test = response)))
  //     .subscribe();
  // }
}
