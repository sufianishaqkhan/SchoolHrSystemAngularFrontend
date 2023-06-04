import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrSchoolComponent } from './hr-school/hr-school.component';
import { HrEmployeeComponent } from './hr-employee/hr-employee.component';

const routes: Routes = [



  { path: 'school', component: HrSchoolComponent },
  { path: 'employee', component: HrEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
