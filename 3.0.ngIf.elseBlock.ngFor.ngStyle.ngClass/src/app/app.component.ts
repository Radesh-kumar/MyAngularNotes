import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
flag=false;

toggleFlag=function(){
this.flag=!this.flag
return this.flag;
}

getColor=function(){
  if(this.flag==true){
      return 'green';
  }
  else{
    return 'red';
  }
}


currentname="";
studentarray=['Radesh','Rocksta'];
add=function(){
  this.studentarray.push(this.currentname);
  this.currentname="";
}
display=true;
counter=0;
col='black';
toggleDisplay=function(){
  this.display=!this.display;
  this.counter=this.counter+1;
  if(this.counter>4){
    this.col='blue';
}
  return this.display;
}

 

}
