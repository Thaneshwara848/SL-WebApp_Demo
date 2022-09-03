import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharservService {

  constructor() { }

  chatMsg:any=[];

  chat(msg:any){
      this.chatMsg.push(msg)

      return this.chatMsg;
  }
}
