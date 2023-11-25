import { Component } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    regions = ["Africa", "America", "Asia", "Europe", "Oceania"];


    showRegions() {
      document.getElementById("dropdown-content")!.classList.toggle("visible")
    }
}
