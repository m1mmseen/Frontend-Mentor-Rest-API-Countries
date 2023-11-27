import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../interfaces/Country";

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{

  @Input() countryFromParent:any;

  country:Country;

  ngOnInit() {
    this.country = this.countryFromParent;
  }

}
