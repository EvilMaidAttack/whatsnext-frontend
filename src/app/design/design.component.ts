import { Component } from '@angular/core';
import { ThemeService } from 'src/common/services/theme.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  constructor(private themeService: ThemeService){}

  toggleTheme(){
    this.themeService.toggleTheme();
  }

}
