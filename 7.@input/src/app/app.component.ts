import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Parent Component Area</h2>
<label >Send to child :</label>
<input type="text" #tochildtext (keyup)="0" >
<h4>Data from Child:</h4>
<br>

<app-child [toparent]="tochildtext.value" [toparent2]="'Hard Coded: Radesh'" [toparent3]="var1()"></app-child>`,

  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 var1 =function(){
   return 5;
 }
}
