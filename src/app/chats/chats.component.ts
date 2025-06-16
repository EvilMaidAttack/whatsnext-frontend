import { Component, OnInit } from '@angular/core';
import { ChatService } from '../common/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  chats;

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.getAll().subscribe({next: 
      data => {
        this.chats = data;
        console.log(this.chats);
      }
    })
  }


}
