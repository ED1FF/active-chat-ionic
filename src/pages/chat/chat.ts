import { Component } from '@angular/core';
import { Ng2Cable } from 'ng2-cable/index';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {

  constructor(private ng2cable: Ng2Cable) {
  }

}
