import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<h2>Child Component Area</h2>
<label >Send to parent :</label>

<input type="text" #input2 (keyup)="sendtoparerent(input2.value)" >

<h4>Data from Parent:</h4>
{{parent}}
<br> `
})
export class AppChildComponent {
    @Input() parent:string;
    @Output() child = new EventEmitter();
    
    sendtoparerent(x) {
      this.child.emit(x)
    }
}