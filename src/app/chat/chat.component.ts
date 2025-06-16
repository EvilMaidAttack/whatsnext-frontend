import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnChanges{

  chat: IChat;
  @Input("chatId") chatId: string | null;

  ngOnChanges(changes: SimpleChanges): void {
      
  }


}


export interface IChat {
  id: string;
  profile: number;
  chat_partner_name: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  messages: IMessage | null

}

export interface IMessage {
  id: number;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
  is_received: boolean;
}
