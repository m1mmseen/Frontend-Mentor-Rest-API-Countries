import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoadingService} from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) {}

  removeRequest(request: HttpRequest<any>) {
    const index  = this.requests.indexOf(request);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }
    this.loadingService.isLoading.next(this.requests.length > 0);
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.requests.push(request);
    this.loadingService.isLoading.next(true);

    return new Observable(observer => {
      const subscription = next.handle(request).subscribe( event => {
        if(event instanceof HttpResponse) {
          this.removeRequest(request);
          observer.next(event);
        }
      })
    });
  }
}
