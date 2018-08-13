import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng2CableModule } from 'ng2-cable';
import { Ng2Cable, Broadcaster } from 'ng2-cable/index';

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
    Broadcaster
  ]
})
export class AppModule {}
