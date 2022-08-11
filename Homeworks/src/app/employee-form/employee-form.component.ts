import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formGroup: any;

  employees: any[] = [];

  // employees = new BehaviorSubject(<any>[]);

  employeeUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  counter = 1;

  postId = '';

  onClick() {
    // this.http
    //   .post(this.employeeUrl, {
    //     name: this.formGroup.get('name').value,
    //     salary: this.formGroup.get('salary').value,
    //     age: this.formGroup.get('age').value,
    //   })
    //   .subscribe();

    this.http
      .post(this.employeeUrl, this.formGroup.value)
      .subscribe((data) => console.log(data));

    // console.log(this.http.post(this.employeeUrl, this.formGroup.value));

    this.http
      .get(this.employeeUrl)
      .subscribe((res) => this.employees.push(res));

    // this.employees.push({
    //   name: this.formGroup.get('name').value,
    //   salary: this.formGroup.get('salary').value,
    //   age: this.formGroup.get('age').value,
    // });

    // this.employees.push(
    //   this.http
    //     .get(this.employeeUrl)
    //     .subscribe((res) => this.employees.push(res+"/" + ))
    // );
    // console.log(this.employees);

    this.counter++;
  }
}
