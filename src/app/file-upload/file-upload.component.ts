import { Component } from '@angular/core';
import { ExportService } from '../common/services/export.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileName = ""
  selectedFile: File | null = null;

  constructor(private exportService: ExportService){}
  
  uploadFile(){
    if (this.selectedFile){
      const formData = new FormData();
      formData.append('export', this.selectedFile);

      this.exportService.upload(formData).subscribe({
      next: (response) => {
          console.log("Upload successful!");
          
        },
      error: (err) => {
        console.log("Upload failed!");
      }
      })
    }
    
    else {
      console.warn("No file selected"); 
    }

  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
    }
  }


  debug(){
    console.log(this.fileName);
    
  }


}
