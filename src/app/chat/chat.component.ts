import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  chat: IChat;
  @Input("requestedChatId") requestedChatId: string;
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
