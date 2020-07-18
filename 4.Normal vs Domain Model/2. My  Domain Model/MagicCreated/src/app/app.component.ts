import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
  export class AppComponent  {
   joke:Object[];
    constructor()  {
      this.joke=
      [
        {numb:1,name:'Radesh',age:'20'},
        {numb:2,name:'Rocksta',age:'20'},
        {numb:3,name:'David',age:'20'}
      ];
    }
    state=[false,false,false];
    toggle=function(x){
      {
        this.state[x]=!this.state[x];
      }
    
    }

    // Using Domain Model

 }

