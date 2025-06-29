import { Component, OnInit } from '@angular/core';
import { ChatService } from '../common/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  chats;
  selectedChatId: string | null = null;

  constructor(private chatService: ChatService, private route: ActivatedRoute, private dialog: MatDialog){}

  ngOnInit(): void {
    this.chatService.getAll().subscribe({next: 
      data => {
        this.chats = data;
        console.log(this.chats);
      }
    });

    this.route.paramMap.subscribe(params => {
      this.selectedChatId = params.get('id');
      
    });

  }

  openUploadDialog(){
    this.dialog.open(FileUploadComponent, {
      width: '400px',
      disableClose: false,
      autoFocus: true,
      backdropClass: 'custom-backdrop'
    });
  }


}
