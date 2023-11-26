import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    // sends region filter to parent
    @Output() newFilterEvent = new EventEmitter<string>();
    // sends country search to parent
    @Output() newSearchEvent = new EventEmitter<string>();

    /* ----- FILTER BY REGION LOGIC ----- */
    regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    filter: string;

    showRegions() {
      document.getElementById("dropdown-content")!.classList.toggle("visible")
    }

    filterByRegion(region:string) {
          this.newFilterEvent.emit(region);
    }


    /* ----- SEARCHBAR LOGIC ----- */
    searchbar = document.getElementById("searchbar")!;

    search(event:any) {
      document.querySelector(".error-message")!.classList.remove("visible");
      this.newSearchEvent.emit(event.target.value);
    }


}
