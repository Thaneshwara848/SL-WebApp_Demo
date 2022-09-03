import { Component, OnInit } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-ravava',
  templateUrl: './ravava.component.html',
  styleUrls: ['./ravava.component.css']
})
export class RavavaComponent implements OnInit {

  constructor(private cs:CharservService) { }

  ngOnInit(): void {
  }
msgs=[];
  send(msg:any)
  {
    this.msgs= this.cs.chat(msg)
  }
}
