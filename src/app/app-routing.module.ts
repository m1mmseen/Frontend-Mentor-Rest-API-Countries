import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CountriesComponent} from "./countries/countries.component";
import {CountryDetailsComponent} from "./country-details/country-details.component";

const routes: Routes = [
  {path: '', component: CountriesComponent},
  {path: 'country-detail/:id', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
