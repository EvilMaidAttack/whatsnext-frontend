import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken){
      const cloned = req.clone({
        setHeaders: {
          Authorization: `JWT ${accessToken}`
        }
      });
      return next.handle(cloned)
    }
    return next.handle(req);
  }
}
