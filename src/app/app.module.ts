import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDemoComponent } from './color-demo/color-demo.component';
import { ThemeService } from 'src/common/services/theme.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDemoComponent,
    NavigationComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
