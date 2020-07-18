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
        {name:'Radesh',age:'20'},
        {name:'Rocksta',age:'20'},
        {name:'David',age:'20'}
      ];
    
    }
    
    state=true;
    toggle=function(){
      this.state=!this.state;
    }

    }


