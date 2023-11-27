import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of, throwError} from "rxjs";
import {Country} from "../shared/interfaces/Country";
import {CountriesComponent} from "../pathComponents/countries/countries.component";

enum Endpoints {
  "all",
  "name/",
  "region/"
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }


  getCountries(url:string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCountry(url: string, endpoint: string,$event:string): Observable<Country[]> {
    return this.http.get<Country[]>(url + endpoint + $event)
      .pipe(catchError(this.handleError)
      );
  }

  getCountryCodesAndNames(): Observable<Country[]> {
    return this.http.get<Country[]>("https://restcountries.com/v3.1/all?fields=cca3,name")
      .pipe(catchError(this.handleError)
      );
  }

  // see https://angular.io/guide/http-handle-request-errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage:string;
    if (error.status === 0) {
      errorMessage = "A client-side or network error occurred. Please try again later.";
    } else if (error.status === 404 ){
      errorMessage = "There is no country with this name";
    }
    else if (error.status === 400 ){
      errorMessage = "Sorry, some error happens. Please try again later";
    }
    else if (error.status === 500 ){
      errorMessage = "Server Error";
    }
    return throwError(() => ({ message: errorMessage, status: error.status }));
  }


}
