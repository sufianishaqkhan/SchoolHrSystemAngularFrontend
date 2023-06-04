import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SchoolApi } from "../../../services/custom/school.service";

interface School {
  key: string;
  name: string;
  employees: number;
}

@Component({
  selector: 'app-hr-school',
  templateUrl: './hr-school.component.html',
  styleUrls: ['./hr-school.component.css']
})
export class HrSchoolComponent implements OnInit {

  listSchool = [];

  isVisibleModal = false;

  constructor(private fb: FormBuilder, private schoolApi: SchoolApi,) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      School_ID: [0, [Validators.required]],
      School_Name: [null, [Validators.required]],
      School_SEMIS_Code: [null, [Validators.required]],
      School_Level: [null, [Validators.required]],
      School_Gender: [null, [Validators.required]],
      District: [null, [Validators.required]]
    });

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

  DeleteSchool(school_id: number) {
    this.schoolApi.DeleteSchool(school_id).subscribe(
      data => {
        this.LoadAllSchools();
      },
      error => {
      }
    );
  }

  showModal(): void {
    this.validateForm = this.fb.group({
      School_ID: [0, [Validators.required]],
      School_Name: [null, [Validators.required]],
      School_SEMIS_Code: [null, [Validators.required]],
      School_Level: [null, [Validators.required]],
      School_Gender: [null, [Validators.required]],
      District: [null, [Validators.required]]
    });

    this.isVisibleModal = true;
  }

  showEditModal(school: any): void {
    this.validateForm.patchValue(school);
    this.isVisibleModal = true;
  }

  handleCancel(): void {
    this.isVisibleModal = false;
  }

  ////Form
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {

      if (this.validateForm.value.School_ID == 0) {
        this.schoolApi.AddSchool(this.validateForm.value).subscribe(
          data => {
            this.LoadAllSchools();
            this.isVisibleModal = false;
          },
          error => {
          }
        );
      } else if (this.validateForm.value.School_ID > 0) {
        this.schoolApi.UpdateSchool(this.validateForm.value).subscribe(
          data => {
            this.LoadAllSchools();
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
