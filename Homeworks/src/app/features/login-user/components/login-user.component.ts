import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginAuthService } from 'src/app/shared/services/login-auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  formGroup = new FormGroup<any>('');

  constructor(
    private api: ApiService,
    private router: Router,
    private loginAuth: LoginAuthService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  public logIn() {
    this.api.getMethod().subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.formGroup.value.email &&
          a.password === this.formGroup.value.password
        );
      });
      if (user) {
        alert('Login Successful!');
        this.checkCurrency();
        this.checkEdit();
        this.formGroup.reset();
        this.loginAuth.isLoggedIn = true;
        this.loginAuth.setUserInfo = this.formGroup.value;
        this.router.navigate(['users']);
      } else {
        alert('user not found!');
      }
    });
  }

  checkCurrency() {
    let email = this.formGroup.value.email;

    this.api.getMethod().subscribe((res): void => {
      const index = res.findIndex(function (arg: any) {
        return arg.email === email;
      });

      if (res[index]['salary'] > 400) {
        this.loginAuth.currencyCheck = true;
      }
    });
  }

  checkEdit() {
    let email = this.formGroup.value.email;

    this.api.getMethod().subscribe((res): void => {
      const index = res.findIndex(function (arg: any) {
        return arg.email === email;
      });

      this.loginAuth.idCheck = res[index]['id'];
    });
  }
}
