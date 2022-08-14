import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public formGroup = new FormGroup<any>('');

  urlValidator = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  nicknameValidator = '^[a-zA-Z0-9_.-]*$';
  passwordRegex = '^[a-zA-Z0-9_]*$';
  numRegex = '^[+][0-9]{12}$';

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(this.passwordRegex),
      ]),
      confirm: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(this.passwordRegex),
      ]),
      nickname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.nicknameValidator),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
        Validators.pattern(this.numRegex),
      ]),
      website: new FormControl('', [
        Validators.required,
        Validators.pattern(this.urlValidator),
      ]),
      checkbox: new FormControl('', Validators.requiredTrue),
      salary: new FormControl('', [Validators.required]),
    });
  }

  users: any = [];

  buttoner = true;

  userObj: any = new Object();

  public signUp() {
    // this.api.postMethod(this.formGroup.value).subscribe((res) => {
    //   alert('Signup Successful');
    //   this.formGroup.reset();
    //   this.router.navigate(['login']);
    // });

    this.userObj.email = this.formGroup.value.email;
    this.userObj.nickname = this.formGroup.value.nickname;
    this.userObj.website = this.formGroup.value.website;
    this.userObj.phone = this.formGroup.value.number;
    this.userObj.password = this.formGroup.value.password;
    this.userObj.salary = this.formGroup.value.salary;

    this.api.postMethod(this.userObj).subscribe((res) => {
      this.formGroup.reset();
      alert('You have successfully registered!');
      this.router.navigate(['login']);
    });
  }

  public onClick(): void {
    const pass = this.formGroup?.get('password')?.value;
    const conf = this.formGroup?.get('confirm')?.value;
    console.log(this.formGroup);
    if (this.formGroup.valid && pass == conf && pass.length > 7) {
      this.users.push(this.formGroup.value);
      this.formGroup.reset();
      this.buttoner = true;
      console.log(pass);
    } else {
      alert('You must fill inputs correctly!');
    }
  }

  public checkbox(e: any): void {
    const pass = this.formGroup?.get('password')?.value;
    const conf = this.formGroup?.get('confirm')?.value;
    if (e.target.checked) {
      if (pass == conf && pass.length > 7 && this.formGroup.valid) {
        this.buttoner = false;
      } else {
        this.buttoner = true;
      }
    } else {
      this.buttoner = true;
    }
    if (
      pass == conf &&
      pass.length > 7 &&
      e.target.checked &&
      this.formGroup.valid
    ) {
      this.buttoner = false;
    } else {
      this.buttoner = true;
    }
  }

  public removeItem(element: any) {
    this.users.forEach((value: string, index: number) => {
      if (value == element) {
        if (
          window.confirm(
            `Are you sure you want to delete user with email: ${element.email} ?`
          )
        ) {
          this.users.splice(index, 1);
        }
      }
    });
  }

  public update(element: any) {
    let updateUser = [];
    this.users.forEach((value: string, index: number) => {
      if (value == element) {
        updateUser = this.users.splice(index, 1);
        console.log(updateUser);
        this.formGroup.setValue({
          email: updateUser[0].email,
          password: updateUser[0].password,
          confirm: updateUser[0].password,
          nickname: updateUser[0].nickname,
          number: updateUser[0].number,
          website: updateUser[0].website,
          salary: updateUser[0].salary,
          checkbox: '',
        });
      }
    });
    this.buttoner = true;
  }
}
