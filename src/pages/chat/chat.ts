import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng2Cable } from 'ng2-cable/index';
import { Content } from 'ionic-angular';
import { MessageAPI } from '../../api/message';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Broadcaster } from 'ng2-cable/index';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage implements OnInit {
  messages:any = [];
  newMessageForm:FormGroup;
  message:any = {};
  @ViewChild(Content) content: Content;

  constructor(private ng2cable: Ng2Cable,
              private messageAPI: MessageAPI,
              private broadcaster: Broadcaster,
              private fb: FormBuilder) {
  }

  ionViewDidLoad() {
    this.loadMessages();

    this.broadcaster.on<string>('CreateMessage').subscribe(
      message => {
        this.messages.push(message);
      }
    );
  }

  ngOnInit() {
    this.content.scrollToBottom();
    this.loadForm();
  }

  loadForm() {
    this.newMessageForm = this.fb.group({
      user_name: [this.message.user_name, [Validators.required]],
      text: [this.message.text, [Validators.required]]
    });
  }

  loadMessages() {
    this.messageAPI.query().subscribe(this.setMessages);
  }

  setMessages = (data) => {
    this.messages = data;
  }

  submit() {
    this.messageAPI.create({message: this.newMessageForm.value}).subscribe();
  }
}
