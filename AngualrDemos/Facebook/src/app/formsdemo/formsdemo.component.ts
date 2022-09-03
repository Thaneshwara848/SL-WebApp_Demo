import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myInfo(userForm:any){
      console.log(userForm)
  }

}
