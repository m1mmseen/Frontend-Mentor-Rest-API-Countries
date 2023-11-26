import {Component} from '@angular/core';
import {Country} from "../Country";


@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  message:string;

  countries: Country[] = [];
  filteredCountries: Country[] = [];

  constructor() {
    this.getCountries();
  }

  async getCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Error fetching countries");
      }
      const data = await response.json();
      this.countries = data;
    } catch (error) {
      console.error(error);
    }
  }

  async filteredByRegion($event: string) {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/" +$event);
      if (!response.ok) {
        throw new Error("Error fetching countries");
      }
      const data = await response.json();
      this.countries = data;
    } catch (error) {
      console.error(error);
    }
  }
  async getSearchedCountry($event: string) {
    try {
      const response = await fetch("https://restcountries.com/v3.1/name/" + $event);
      if (!response.ok) throw new Error("Error fetching countries");
      this.countries = await response.json();
    } catch (error) {
      if ($event.length > 0) {
        document.querySelector(".error-message")!.classList.add("visible");
      }
    }

  }
}
