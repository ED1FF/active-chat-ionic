import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng2CableModule } from 'ng2-cable';
import { Ng2Cable, Broadcaster } from 'ng2-cable/index';

import { MessageAPI } from '../api/message';

import { MyApp } from './app.component';
import { ChatPage }  from "./../pages/chat/chat";

@NgModule({
  declarations: [
    MyApp,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    Ng2CableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Ng2Cable,
    Broadcaster,
    MessageAPI
  ]
})
export class AppModule {}
