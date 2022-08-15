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

  checkLogin() {
    return this.loginService.isLoggedIn;
  }
}
