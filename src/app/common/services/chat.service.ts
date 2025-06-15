import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private rootUrl = "http://localhost:8000/chat/"

  constructor(private http: HttpClient) {}

  getAll():Observable<any>{
    return this.http.get(this.rootUrl + "chatrooms");
  }

}
