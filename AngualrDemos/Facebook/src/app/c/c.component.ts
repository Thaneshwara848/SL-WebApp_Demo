import { Component, OnInit } from '@angular/core';
import { DemoServService } from '../demo-serv.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private dbs:DemoServService) { }

  ngOnInit(): void {
  }

  db(){
    //console.log("Hi C  comp with 100 lines of code ")
    this.dbs.dbcommonlogic();
  }

}
