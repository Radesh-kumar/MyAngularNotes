import { Component, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Parent Component Area</h2>
<label >Send to child :</label>
<input type="text" #input1 (keyup)="0" >
<h4>Data from Child:</h4>
{{recieve}}
<br>

<app-child 
[parent]="input1.value"
(child)="recieve=$event "           
></app-child>
`,

  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  

}