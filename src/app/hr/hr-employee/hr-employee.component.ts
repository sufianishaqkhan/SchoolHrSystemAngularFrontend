import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeApi } from "../../../services/custom/employee.service";
import { SchoolApi } from "../../../services/custom/school.service";

interface Employee {
  employee_info_id: string;
  name: string;
  school_name: string;
}

@Component({
  selector: 'app-hr-employee',
  templateUrl: './hr-employee.component.html',
  styleUrls: ['./hr-employee.component.css']
})
export class HrEmployeeComponent implements OnInit {

  listEmployee = [];
  listSchool = [];

  isVisibleModal = false;

  constructor(private fb: FormBuilder, private employeeApi: EmployeeApi, private schoolApi: SchoolApi,) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      Employee_ID: [0, [Validators.required]],
      Employee_Name: [null, [Validators.required]],
      School_ID: [null, [Validators.required]],
      Employee_Code: [null, [Validators.required]],
      Address: [null, [Validators.required]],
      Gender: [null, [Validators.required]]
    });

    this.LoadAllEmployees();
    this.LoadAllSchools();
  }

  LoadAllSchools() {
    this.schoolApi.GetAllSchools().subscribe(
      data => {
        this.listSchool = data.Data;
      },
      error => {
      }
    );
  }

  LoadAllEmployees() {
    this.employeeApi.GetAllEmployees().subscribe(
      data => {
        this.listEmployee = data.Data;
      },
      error => {
      }
    );
  }

  DeleteEmployee(employee_id: number) {
    this.employeeApi.DeleteEmployee(employee_id).subscribe(
      data => {
        this.LoadAllEmployees();
      },
      error => {
      }
    );
  }

  showModal(): void {
    this.validateForm = this.fb.group({
      Employee_ID: [0, [Validators.required]],
      Employee_Name: [null, [Validators.required]],
      School_ID: [null, [Validators.required]],
      Employee_Code: [null, [Validators.required]],
      Address: [null, [Validators.required]],
      Gender: [null, [Validators.required]]
    });

    this.isVisibleModal = true;
  }

  showEditModal(employee: any): void {
    console.log(employee);

    this.validateForm.patchValue(employee);
    this.isVisibleModal = true;
  }

  handleCancel(): void {
    this.isVisibleModal = false;
  }

  ////Form
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {

      if (this.validateForm.value.Employee_ID == 0) {
        this.employeeApi.AddEmployee(this.validateForm.value).subscribe(
          data => {
            this.LoadAllEmployees();
            this.isVisibleModal = false;
          },
          error => {
          }
        );
      } else if (this.validateForm.value.Employee_ID > 0) {
        this.employeeApi.UpdateEmployee(this.validateForm.value).subscribe(
          data => {
            this.LoadAllEmployees();
            this.isVisibleModal = false;
          },
          error => {
          }
        );
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
