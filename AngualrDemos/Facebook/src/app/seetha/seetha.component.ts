import { Component, OnInit } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent implements OnInit {

  constructor(private ch:CharservService) { }

  ngOnInit(): void {
  }

  msgs=[];
  send(msg:any)
  {
     this.msgs =this.ch.chat(msg);
  }
}
