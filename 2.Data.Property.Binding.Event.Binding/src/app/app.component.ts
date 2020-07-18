import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  var1='Rocksta';
  check(){
    console.log(this.var1)
  }
  var2=320000;
  value:string;
  annual_salary=function(){
      console.log(this.var2*12);
      return this.var2*12;
      
  };
  var3='Rocksta';
  state=false;
  click_toRemove=function(){
    this.var3=""
  }
  dontWant=function(){
    if(this.var3==""){
      this.state=true;
      return this.state;
    }
  }

  localreference(x){
    this.value =x;
  }
}
