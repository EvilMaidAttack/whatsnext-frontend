import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = "http://127.0.0.1:8000/auth/";

  constructor(private http: HttpClient) {}
  
  private obtainToken(credentials): Observable<any> {
    return this.http.post(this.rootUrl + "jwt/create", credentials)
  }

  login(credentials, onSuccess: () => void, onError: () => void): void{
    const loginSubscription = this.obtainToken(credentials).subscribe((data) => {
      loginSubscription?.unsubscribe()
      localStorage.setItem('access_token', data['access'])
      localStorage.setItem('refresh_token', data['refresh'])
      onSuccess();
    },
    (error: HttpErrorResponse) => {
      onError();
    }
  )
  }



}
