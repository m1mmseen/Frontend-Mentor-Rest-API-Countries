import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FilterComponent } from './shared/filter/filter.component';
import { CountriesComponent } from './pathComponents/countries/countries.component';
import { CountryComponent } from './shared/country/country.component';
import { CountryDetailsComponent } from './pathComponents/country-details/country-details.component';
import {LoadingInterceptor} from "./interceptor/loading.interceptor";
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FilterComponent,
    CountriesComponent,
    CountryComponent,
    CountryDetailsComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
