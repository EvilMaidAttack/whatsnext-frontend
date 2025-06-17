import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../common/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnChanges{

  chat: IChat | null = null;
  @Input("chatId") chatId: string | null;
  newMessage: string = '';

  constructor(private chatService: ChatService){}

  ngOnChanges(changes: SimpleChanges): void {   
    if (changes['chatId'] && this.chatId){
      this.loadChat(this.chatId);
    }
      
  }

  loadChat(id: string){
    this.chatService.get(id).subscribe({
      next: chat => {
        this.chat = chat;      
      },
      error: err => console.log("no chat found")
    });
  }

  sendMessage() {
  if (!this.newMessage.trim() || !this.chat) return;

  const message: IMessage = {
    id: Date.now(), // temp ID
    sender: 'user',
    content: this.newMessage,
    timestamp: new Date(),
    is_received: true
  };

  // Push user message
  this.chat.messages = this.chat.messages || [];
  this.chat.messages.push(message);

  // Reset input
  this.newMessage = '';

  // Optionally, fake an AI response after 1s
  setTimeout(() => {
    const aiReply: IMessage = {
      id: Date.now() + 1,
      sender: 'ai',
      content: 'Hello! I am your assistant 😊',
      timestamp: new Date(),
      is_received: true
    };
    this.chat!.messages!.push(aiReply);
  }, 1000);
}


}


export interface IChat {
  id: string;
  profile: number;
  chat_partner_name: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  messages: IMessage[] | null;
}

export interface IMessage {
  id: number;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
  is_received: boolean;
}
