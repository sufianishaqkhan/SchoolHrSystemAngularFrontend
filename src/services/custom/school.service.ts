import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NGconfig } from "src/services/ng.config";

@Injectable()
export class SchoolApi {

  constructor(protected http: HttpClient) { }

  public GetAllSchools(): Observable<any> {
    const url = NGconfig.getPath() + "/School/GetAllSchools";

    return this.http
      .get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public AddSchool(data?: any): Observable<any> {
    const url = NGconfig.getPath() + "/School/AddSchool";
    return this.http
      .post(url, data)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public UpdateSchool(data?: any): Observable<any> {
    const url = NGconfig.getPath() + "/School/UpdateSchool";
    return this.http
      .post(url, data)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public DeleteSchool(schoolId: any): Observable<any> {
    const url = NGconfig.getPath() + "/School/DeleteSchool?schoolId=" + schoolId;
    return this.http
      .post(url, null)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
