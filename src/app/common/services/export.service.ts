import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private rootUrl = "http://localhost:8000/chat/exports/";

  constructor(private http: HttpClient) { }

  upload(file):Observable<any>{
    return this.http.post<any>(this.rootUrl, file);
  }

}
