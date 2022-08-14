import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  usersUrl = 'http://localhost:3000/users';

  postMethod(data: any) {
    return this.http.post(this.usersUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getMethod() {
    return this.http.get(this.usersUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  update(data: any, id: number) {
    return this.http.put(this.usersUrl + '/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  delete(id: number) {
    return this.http.delete(this.usersUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
