import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { EmpServiceService } from './emp-service.service';
import { EmployeeObj } from './emp-obj.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formGroup: any;

  // employees: any[] = [];

  // employees = new BehaviorSubject(<any>[]);

  employeeUrl: string = 'http://localhost:3000/employees';

  constructor(
    private http: HttpClient,
    private empService: EmpServiceService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });

    this.getEmployees();
  }

  counter = 1;

  postId = '';

  // VERSION 1

  // public onClick() {
  //   this.http
  //     .post(this.employeeUrl, this.formGroup.value)
  //     .subscribe((data) => this.employees.push(data));

  //   this.formGroup.reset();

  //   // console.log(this.http.post(this.employeeUrl, this.formGroup.value));

  //   // this.http
  //   //   .get(this.employeeUrl)
  //   //   .subscribe((res) => this.employees.push(res));

  //   // this.employees.push({
  //   //   name: this.formGroup.get('name').value,
  //   //   salary: this.formGroup.get('salary').value,
  //   //   age: this.formGroup.get('age').value,
  //   // });

  //   // this.employees.push(
  //   //   this.http
  //   //     .get(this.employeeUrl)
  //   //     .subscribe((res) => this.employees.push(res+"/" + ))
  //   // );
  //   // console.log(this.employees);

  //   // this.counter++;
  // }

  // public update(arg: any) {
  //   this.empService.getMethod();
  // }

  // public removeItem(arg: any) {
  //   console.log('removed' + arg);
  // }

  // VERSION 2

  employeeObj: EmployeeObj = new EmployeeObj();
  employees: any;

  addEmployee() {
    this.employeeObj.name = this.formGroup.value.name;
    this.employeeObj.salary = this.formGroup.value.salary;
    this.employeeObj.age = this.formGroup.value.age;

    this.empService.postMethod(this.employeeObj).subscribe((res) => {
      this.formGroup.reset();
      this.getEmployees();
      console.log(res);
    });
  }

  getEmployees() {
    this.empService.getMethod().subscribe((res) => {
      this.employees = res;
    });
  }

  deleteEmployee(employee: any) {
    this.empService.delete(employee.id).subscribe((res) => {
      alert('You have successfully deleted an employee!');
      this.getEmployees();
    });
  }

  popup = false;

  updateEmployee(employee: any) {
    this.employeeObj.id = employee.id;
    this.formGroup.controls['name'].setValue(employee.name);
    this.formGroup.controls['salary'].setValue(employee.salary);
    this.formGroup.controls['age'].setValue(employee.age);
  }

  updateDetails() {
    this.employeeObj.name = this.formGroup.value.name;
    this.employeeObj.salary = this.formGroup.value.salary;
    this.employeeObj.age = this.formGroup.value.age;

    this.empService
      .update(this.employeeObj, this.employeeObj.id)
      .subscribe((res) => {
        // let ref = document.getElementById('cancel');
        // ref?.click();
        this.formGroup.reset();
        this.getEmployees();
      });
  }
}
