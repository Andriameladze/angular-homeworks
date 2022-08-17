import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from '../login-user/login-auth.service';
import { ListApiService } from './list-api.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss'],
})
export class LoginListComponent implements OnInit {
  constructor(
    private api: ListApiService,
    private loginAuth: LoginAuthService
  ) {}

  public formGroup = new FormGroup<any>('');

  urlValidator = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  nicknameValidator = '^[a-zA-Z0-9_.-]*$';
  passwordRegex = '^[a-zA-Z0-9_]*$';
  numRegex = '^[+][0-9]{12}$';

  users: any;

  ngOnInit(): void {
    this.getUsers();

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

  getUsers() {
    this.api.getMethod().subscribe((res) => {
      this.users = res;
    });
  }

  public popup = false;

  public buttoner = true;

  userObj: any = new Object();

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

  updateUser(user: any) {
    this.userObj.id = user.id;
    this.formGroup.controls['email'].setValue(user.email);
    this.formGroup.controls['password'].setValue(user.password);
    this.formGroup.controls['confirm'].setValue(user.confirm);
    this.formGroup.controls['nickname'].setValue(user.nickname);
    this.formGroup.controls['number'].setValue(user.phone);
    this.formGroup.controls['website'].setValue(user.website);
    this.formGroup.controls['checkbox'].setValue(user.checkbox);
    this.formGroup.controls['salary'].setValue(user.salary);
  }

  updateDetails() {
    this.userObj.email = this.formGroup.value.email;
    this.userObj.nickname = this.formGroup.value.nickname;
    this.userObj.website = this.formGroup.value.website;
    this.userObj.phone = this.formGroup.value.number;
    this.userObj.password = this.formGroup.value.password;
    this.userObj.salary = this.formGroup.value.salary;

    this.api.update(this.userObj, this.userObj.id).subscribe((res: any) => {
      this.formGroup.reset();
      this.getUsers();
      this.popup = false;
      console.log(this.userObj);
    });
  }

  deleteUser(user: any) {
    this.api.delete(user.id).subscribe((res) => {
      alert('You have successfully deleted a user!');
      this.getUsers();
    });
  }

  editDeleteCheck(user: any) {
    if (user.id == this.loginAuth.idCheck) {
      return true;
    } else {
      return false;
    }
  }
}
