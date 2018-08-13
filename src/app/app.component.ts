import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ng2Cable } from 'ng2-cable/index';
import { ChatPage }  from "./../pages/chat/chat";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = ChatPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private ng2cable: Ng2Cable) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.ng2cable.subscribe('http://localhost:3000/cable', 'ChatChannel')
  }
}
