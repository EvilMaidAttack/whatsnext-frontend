import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/common/services/theme.service';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit, OnDestroy{

  originalTheme: 'light' |'dark' = 'light';

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
      console.log("Public initiated");
    
      this.originalTheme = this.themeService.getTheme();
      this.themeService.setTheme("light")
  }

  ngOnDestroy(): void {
    console.log("Public destroyed");
    
    this.themeService.setTheme(this.originalTheme); 
  }

}
