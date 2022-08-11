import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formGroup: any;

  employees: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  public onClick() {
    this.employees.push({
      name: this.formGroup.get('name').value,
      salary: this.formGroup.get('salary').value,
      age: this.formGroup.get('age').value,
    });

    console.log(this.employees[0]);
  }
}
