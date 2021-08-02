import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Instagram} from "./instagram";

@Injectable({ providedIn: 'root' })
export class InstagramService {

  private instagramUrl = `https://www.instagram.com/littlegeekyhandmade/?__a=1`;  // TODO find a way to control the query

  constructor(
    private http: HttpClient) {
  }

  /** GET products from the server */
  getInstagramProfile(): Observable<any> {
    return this.http.get<any>(this.instagramUrl)
      .pipe(
        catchError(this.handleError<any>('getProducts', []))
      );// potencjalnie nowy interfejs (angularowy) do napisania
    // pipe potencjalnie do zrobienia i handle error do użycia
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
