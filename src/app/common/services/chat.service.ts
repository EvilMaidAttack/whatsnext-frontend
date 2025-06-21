import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChat, IMessage, IMessageDTO } from 'src/app/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private rootUrl = "http://localhost:8000/chat/"

  constructor(private http: HttpClient) {}

  getAll():Observable<any>{
    return this.http.get(this.rootUrl + "chatrooms");
  }

  get(id:string):Observable<IChat> {
    return this.http.get<IChat>(`${this.rootUrl}chatrooms/${id}`);
  }

  postMessage(message: IMessageDTO, chatId: string):Observable<IMessage>{
    return this.http.post<IMessage>(`${this.rootUrl}chatrooms/${chatId}/messages/`,message);

  }

  generateAIResponse(chatId: string){
    // TODO: continue @ Backend -> Define method to generate ai response and put it to messages
    return 
  }



}
