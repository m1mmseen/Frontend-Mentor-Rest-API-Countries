import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesComponent} from "./pathComponents/countries/countries.component";
import {CountryDetailsComponent} from "./pathComponents/country-details/country-details.component";

const routes: Routes = [
  {path: '', component: CountriesComponent},
  {path: 'country-detail/:name', component: CountryDetailsComponent},
  {path: 'country-details/:cca3', component:CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
