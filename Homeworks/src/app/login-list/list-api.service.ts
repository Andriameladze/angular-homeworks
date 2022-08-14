import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListApiService {
  constructor(private http: HttpClient) {}

  usersUrl = 'http://localhost:3000/users';

  getMethod() {
    return this.http.get(this.usersUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
