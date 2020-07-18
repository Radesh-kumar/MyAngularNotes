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
        this.state[x]=!this.state[x];
      
    
    }
    var1:'';
    var2:'';
    var3:'';
    submitfunc=function(){
        this.joke.push({numb:this.var1,name:this.var2,age:this.var3})
        this.var1="";
        this.var2="";
        this.var3="";
    }

 }

