import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginAuthService } from '../login-user/login-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginAuthService) {}

  ngOnInit(): void {}

  public checkLogin() {
    return this.loginService.isLoggedIn;
  }

  public checkCurrency() {
    return this.loginService.currencyCheck;
  }

  public logOut() {
    this.loginService.isLoggedIn = false;
    this.loginService.currencyCheck = false;
  }
}
