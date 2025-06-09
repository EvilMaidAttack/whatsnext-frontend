import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDemoComponent } from './color-demo/color-demo.component';
import { ThemeService } from 'src/common/services/theme.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatsComponent } from './chats/chats.component';
import { DesignComponent } from './design/design.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDemoComponent,
    NavigationComponent,
    ChatsComponent,
    DesignComponent,
    ProfileComponent,
    SettingComponent,
    NotFoundComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ChatsComponent},
      {path: 'chat', component: ChatsComponent},
      {path: 'design', component: DesignComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'setting', component: SettingComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
