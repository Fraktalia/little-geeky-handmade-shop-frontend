import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Product} from "./product";
import {environment} from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductService {

  private productUrl = `${environment.urlAddress}/products`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {
  }

  /** GET products from the server */
  getProducts(quantity?: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl+"?quantity="+quantity)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.productUrl+"/"+productId)
      .pipe(
        catchError(this.handleError<Product>('getProduct'))
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
