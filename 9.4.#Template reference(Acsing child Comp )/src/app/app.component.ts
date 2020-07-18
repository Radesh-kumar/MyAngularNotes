import { Component, EventEmitter, Output, Input,ViewChild, AfterViewInit,OnInit  } from '@angular/core';
import { AppChildComponent } from './child.component';
@Component({
  selector: 'my-app',
  template: `<h2>Parent  Area</h2>
  <h3 >Child Data:Waking up, half past five
  Blood on pillow and one bruised eye
  Drunk too much, you know what I'm like
</h3> <br>
<app-child #child ></app-child>



<button (click)="child.data1()">Click Me1</button>
<button (click)="child.data2()">Click Me2</button>

`,

  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  //  We have used #child as template referance (onlt in HTML)
  //  And we are retrieving methods/function from it (in HTML)
  
  ngAfterViewInit(){
    
  }

  ngOnInit(){
    
  }
}