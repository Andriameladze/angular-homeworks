import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  public userId: any;

  public isLoggedIn = false;

  public userInfo: BehaviorSubject<any> = new BehaviorSubject({
    emai: '',
    password: '',
  });

  constructor() {}

  public setIsloggedIn(arg: boolean) {
    this.isLoggedIn = arg;
  }

  public setUserInfo(arg: any) {
    this.userInfo.next(arg);
  }

  public loggedIn() {
    return this.isLoggedIn;
  }
}
