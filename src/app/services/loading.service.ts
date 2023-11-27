import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loadingStatus: boolean;
  public isLoading = new BehaviorSubject(false);

  constructor() {
    this.isLoading.subscribe((status:boolean) => this.loadingStatus = status);
  }
}
