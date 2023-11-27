import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../shared/interfaces/Country";
import {Router, ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryArray: Country[] = [];
  borderCountries: Country[];


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private countryService: CountryService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((routeparams) => {
      if (routeparams['name']) {
        this.getCountry("name/", routeparams['name']);
      } else {
        this.getCountry("alpha/", routeparams['cca3']);
      }
    })

    this.countryService.getCountryCodesAndNames()
      .subscribe({
        next: response => {
          this.borderCountries = response;
        }
      });
  }

  getCountry(searchEndpoint: string, searchparam: string) {
    this.countryService.getCountry("https://restcountries.com/v3.1/", searchEndpoint, searchparam).subscribe((response) => {
      this.countryArray = response;
    });
  }

  getNameByCca3(cca3: string): string {
    // Find the name corresponding to the cca3 code
    let mapping:Country;
    if (cca3) {
      mapping = this.borderCountries.find(mapping => mapping.cca3 === cca3)!;
      return mapping.name.common;
    }
    return 'Unknown';
  }

  getFirstNativeName(country:Country) {
    const nativeNames = country.name?.nativeName;
    if (!nativeNames) {
      return "";
    }
    const firstKey = Object.keys(nativeNames)[0];
    return nativeNames[firstKey].common;
  }


}
