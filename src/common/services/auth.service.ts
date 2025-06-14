import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = "http://127.0.0.1:8000/auth/";

  constructor(private http: HttpClient) {}

  login(credentials){
    return this.http.post(this.rootUrl + "jwt/create", credentials)
  }


}
