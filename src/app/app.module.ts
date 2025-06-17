import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDemoComponent } from './color-demo/color-demo.component';
import { ThemeService } from 'src/app/common/services/theme.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatsComponent } from './chats/chats.component';
import { DesignComponent } from './design/design.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './common/services/auth.service';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';
import { ShortTextPipe } from './common/pipe/short-text.pipe';



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
    ChatComponent,
    LoginComponent,
    PublicLayoutComponent,
    AppLayoutComponent,
    SignupComponent,
    ShortTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ThemeService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
