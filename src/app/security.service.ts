import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "./product";
import {environment} from "../environments/environment";
import {LoginData} from "./loginData";

@Injectable({ providedIn: 'root' })
export class SecurityService {

  private loginUrl = `${environment.urlAddress}/login`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {
  }

  postLogin(loginData: LoginData): Observable<any>{
    return this.http.post<any>(this.loginUrl, loginData, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('postLogin'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
