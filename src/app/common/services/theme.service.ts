import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    this.setTheme(stored || 'light');
   }

   setTheme(theme: 'light' |'dark') {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
   }

   getTheme(): 'light' | 'dark' {
    return this.currentTheme;
   }

   toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light' 
    this.setTheme(newTheme);  
    }

    
}
