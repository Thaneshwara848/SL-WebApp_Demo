import { Component, OnInit } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-rama',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent implements OnInit {

  constructor(private cs:CharservService) { }

  ngOnInit(): void {
  }
msgs=[];
  send(msg:any)
  {
    this.msgs= this.cs.chat(msg)
  }
}
