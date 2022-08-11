import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  constructor(private http: HttpClient) {}

  // employees: any = [];

  employeeUrl = 'http://localhost:3000/employees';

  // postMethod(data: any) {
  //   this.http.post(this.employeeUrl, data).subscribe();
  // }

  // getMethod() {
  //   this.http.get(this.employeeUrl).subscribe();
  // }

  // VERSION 2

  postMethod(data: any) {
    return this.http.post(this.employeeUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getMethod() {
    return this.http.get(this.employeeUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  update(data: any, id: number) {
    return this.http.put(this.employeeUrl + '/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  delete(id: number) {
    return this.http.delete(this.employeeUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
