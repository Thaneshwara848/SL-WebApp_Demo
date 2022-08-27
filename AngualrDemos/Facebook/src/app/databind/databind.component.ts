import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  company="IBM"

  name="Thanesh"

  count=0;
  adddesca=false
  adddescr=false
  abcd(){
    console.log("Hiiiiiiiii"+this.count++)
    if(this.count>=6)
    {
      alert("You cant add more the 5 ")
     this.adddesca=true 
    }
  }
  xyz(){
    console.log("Byyeeeeeeee" + this.count--)
    if(this.count<0)
    {
      alert("You cant remove less then 0 ")
      this.adddescr=true
    }
  
  }

  mydec=false

emi=0
total=0
amount=0
  cal(princeple:any,t:any,r:any){

   this.amount=(princeple*t*r)/100;
   this.total= princeple + this.emi;
   this.emi=this.total/12 ;


  }
}
