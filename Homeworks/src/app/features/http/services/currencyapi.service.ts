import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyapiService {
  constructor(private http: HttpClient) {}

  public currency1: string = '';
  public currency2: string = '';

  private baseUrl =
    'https://v6.exchangerate-api.com/v6/3bd1e91fcbe48670a8cd7c9e/pair/EUR/GBP';

  public getCurrency(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
