import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NGconfig } from "src/services/ng.config";

@Injectable()
export class EmployeeApi {

  constructor(protected http: HttpClient) { }

  public GetAllEmployees(): Observable<any> {
    const url = NGconfig.getPath() + "/Employee/GetAllEmployees";

    return this.http
      .get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public AddEmployee(data?: any): Observable<any> {
    const url = NGconfig.getPath() + "/Employee/AddEmployee";
    return this.http
      .post(url, data)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public UpdateEmployee(data?: any): Observable<any> {
    const url = NGconfig.getPath() + "/Employee/UpdateEmployee";
    return this.http
      .post(url, data)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public DeleteEmployee(employeeId: any): Observable<any> {
    const url = NGconfig.getPath() + "/Employee/DeleteEmployee?employeeId=" + employeeId;
    return this.http
      .post(url, null)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
