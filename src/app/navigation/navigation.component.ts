import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  viewMode = "chat";

  changeViewMode(mode: string){
    this.viewMode = mode;
  }

}
