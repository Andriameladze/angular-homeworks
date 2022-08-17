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

  employeeUrl: string = 'http://localhost:3000/employees';

  constructor(
    private http: HttpClient,
    private empService: EmpServiceService
  ) {}

  nameRegex = /^[a-zA-Z\s]*$/;
  ageRegex = /^[0-9]{0,2}$/;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.nameRegex),
      ]),
      salary: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern(this.ageRegex),
      ]),
    });

    this.getEmployees();
  }

  employeeObj: EmployeeObj = new EmployeeObj();

  employees: any;

  addEmployee() {
    if ('id' in this.employeeObj) {
      delete this.employeeObj.id;
    }
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

  deleteEmployee(employee: EmployeeObj) {
    this.empService.delete(employee.id).subscribe((res) => {
      alert('You have successfully deleted an employee!');
      this.getEmployees();
    });
  }

  public popup = false;

  updateEmployee(employee: EmployeeObj) {
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
        this.formGroup.reset();
        this.getEmployees();
        this.popup = false;
        console.log(this.employeeObj);
      });
  }

  p: number = 1;
  collection: any[] = [];
}
