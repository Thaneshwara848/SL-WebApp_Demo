import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  players:any =["Thanesh","Suresh","Pravin","Bindu ","Anush"];

  addPlayers(username:any)
  {
    this.players.push(username);

  }





















  constructor() {}

  ngOnInit(): void {}
myvar=true  
movies =[
  {
      title:'Zootopia',
      director:'Byron Howard, Rich Moore',
      cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate:'March 4, 2016'
  },
  {
      title:'Batman v Superman: Dawn of Justice',
      director:'Zack Snyder',
      cast:'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate:'March 25, 2016'
  },
  {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
  {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
  {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
]
 
}
