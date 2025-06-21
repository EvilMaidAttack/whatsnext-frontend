import { Component, Input, OnChanges, SimpleChanges, AfterViewChecked, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChatService } from '../common/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnChanges, AfterViewChecked{

  @Input("chatId") chatId: string | null;
  chat: IChat | null = null;
  newMessageText: string = '';
  isTyping = false;

  @ViewChild('messageContainer') private messageContainer!: ElementRef;
 
  constructor(private chatService: ChatService){}

  ngOnChanges(changes: SimpleChanges): void {   
    if (changes['chatId'] && this.chatId){
      this.loadChat(this.chatId);
    }
      
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
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
    if (this.newMessageText != '' && this.chatId && this.chat) {
      const newMessage: IMessageDTO = {
        sender: 'user',
        content: this.newMessageText,
        is_received: true
      }
      this.chatService.postMessage(newMessage, this.chatId).subscribe({
        next: (message) => {
          if (this.chat){
            this.chat.messages?.push(message);
            this.newMessageText = '';
            this.handleAIResponse();
          }
        },
        error: (err) => {
          console.log("Could not process message!");
        } 
      });

    }
    else {
      console.log("No valid message");
    }

  }

  handleAIResponse(){
    this.isTyping = true;
    if (this.chatId){
      this.chatService.generateAIResponse(this.chatId);
    }
    

  }

  scrollToBottom(){
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }
    catch(error) {
      console.error("Scroll failed");
    }

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

export interface IMessageDTO {
  sender: 'user' | 'ai';
  content: string;
  is_received: boolean
}
