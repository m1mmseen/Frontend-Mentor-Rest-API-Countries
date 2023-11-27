import {Component} from '@angular/core';
import {Country} from "../../shared/interfaces/Country";
import {CountryService} from "../../services/country.service";



@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  basicUrl = "https://restcountries.com/v3.1/";
  basicLocalUrl = "src/data/data.json";

  message:string;

  countries: Country[] = [];
  country:Country;

  constructor(private countryService:CountryService) {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries(this.basicUrl + "all")
      .subscribe({
        next: (response) => this.countries = response,
        error: (error) => {
          if (error.status === 500) {
            this.getLocalCountries();
          }
        }
      });
  }

  getLocalCountries() {
    this.countryService.getCountries(this.basicLocalUrl)
      .subscribe( {
        next: (response) => this.countries = response,
        error: (err) => console.log(err)
      });
  }

  filteredByRegion($event: string) {
    if ($event != "All") {
      this.countryService.getCountry(this.basicUrl,"region/",$event).subscribe((response) => this.countries = response);
    } else {this.getCountries();}

  }

  getSearchedCountry($event: string) {
    const errorModal = document.querySelector(".error-message")!
    this.countryService.getCountry(this.basicUrl, "name/", $event)
      .subscribe({
        next: response => this.countries = response,
        error: (error) =>{
          if ($event.length > 0) {
            errorModal.innerHTML = error.message;
            errorModal.classList.toggle("visible");
          }
        }
      });
  }
}
