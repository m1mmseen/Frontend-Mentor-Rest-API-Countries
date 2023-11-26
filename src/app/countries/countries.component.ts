import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Country} from "../Country";


@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  message:string;

  countries: Country[] = [];

  ngOnInit() {
    this.getCountreis()
  }

  async getCountreis() {
    await fetch("https://restcountries.com/v3.1/all")
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error(("Error fetching countries"));
        }
      })
      .then(data => {
        const res = data;
        this.countries = data;
      });
  }

  async filteredByRegion($event: string) {
    await fetch("https://restcountries.com/v3.1/region/" +$event)
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error(("Error fetching countries"));
        }
      })
      .then(data => {
        const res = data;
        this.countries = data;

      });
  }
/*  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


  }*/

  receiveMessage($event: string) {
    this.message = $event;
    console.log(this.message);
  }


}
