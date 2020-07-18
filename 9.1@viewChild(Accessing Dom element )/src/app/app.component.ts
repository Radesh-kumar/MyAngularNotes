import { Component,ViewChild, AfterViewInit,ElementRef,  } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl:'app.component.html',

  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  // 1.We can use it to access and manipulate particular DOM elemets
 //IMp:- we  use selector tags here '' to bind with local/template reference
  @ViewChild ('ref',{static:false})ref:ElementRef;
  ngAfterViewInit(){
    console.log(this.ref);
    this.ref.nativeElement.innerHTML="Child Data:Manipulated thorough @viewChild";
    //Adding a new class to that DOM element we can see via inspect element
    this.ref.nativeElement.classList="newClass";
  }
  addcolor(){
    this.ref.nativeElement.style.backgroundColor="Blue";

  }


}
