import { Component, OnInit } from '@angular/core';
import { DemoServService } from '../demo-serv.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private a:DemoServService) { }

  ngOnInit(): void {
  }

  db(){
   // console.log("Hi B comp with 100 lines of code ")
   this.a.dbcommonlogic();
  }

}
