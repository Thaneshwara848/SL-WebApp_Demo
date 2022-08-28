import { Component, OnInit } from '@angular/core';
import { DemoServService } from '../demo-serv.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private dbl:DemoServService) { }

  ngOnInit(): void {
  }


  db(){
   // console.log("Hi A comp with 100 lines of code ")
   this.dbl.dbcommonlogic();
  }

}
