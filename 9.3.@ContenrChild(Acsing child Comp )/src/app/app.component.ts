import { Component, EventEmitter, Output, Input,ViewChild, AfterViewInit,OnInit, AfterContentInit  } from '@angular/core';
import { AppChildComponent } from './child.component';
@Component({
  selector: 'my-app',
  template: `<h2>Parent  Area</h2>
  <h3 >Child Data:Waking up, half past five
  Blood on pillow and one bruised eye
  Drunk too much, you know what I'm like
</h3> <br>
<app-child ></app-child>
<button (click)="func1()">Click Me1</button>
<button (click)="func2()">Click Me2</button>

`,

  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterContentInit  {
  // 1.With the help of @Contentchild we can access methods/functions of child component in parent component 
  //IMp:- we dont use selector tags here '' Because we importing whole Component
  //same as @viewchild (almost)
  @ViewChild (AppChildComponent,{static:true})AppChildComponent:AppChildComponent;
  
  ngAfterContentInit (){
    console.log(this.AppChildComponent);
  }
  func1(){
    this.AppChildComponent.data1()
  }
  func2(){
    this.AppChildComponent.data2()
  }
  ngOnInit(){
    
  }
}