import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    @Output() newFilterEvent = new EventEmitter<string>();


    regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    filter: string;

    showRegions() {
      document.getElementById("dropdown-content")!.classList.toggle("visible")
    }

    filterByRegion(region:string) {
          this.newFilterEvent.emit(region);
    }
}
