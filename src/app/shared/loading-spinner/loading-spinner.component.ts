import { Component } from '@angular/core';
import {LoadingService} from "../../services/loading.service";


@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

  constructor(public loadingService: LoadingService) {
  }

}
