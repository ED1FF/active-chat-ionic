import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from './../constants/endpoints';
import { HttpModule } from '@angular/http';

@Injectable()
export class MessageAPI {

  constructor(public http: HttpClient) {}

  query() {
    return this.http.get(`${ENDPOINTS.API_ENDPOINT}/messages`);
  }

  create(params) {
    return this.http.post(`${ENDPOINTS.API_ENDPOINT}/messages`, params);
  }
}
