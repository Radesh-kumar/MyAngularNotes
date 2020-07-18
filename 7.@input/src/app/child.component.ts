import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<h2>Child Component Area</h2>
<label >Send to parent :</label>
<input type="text" >
<h4>Data from Parent:</h4>
{{toparent}} <br>
{{toparent2}} <br>
{{toparent3}}:function returned <br>
<br> `
})
export class AppChildComponent {
    @Input() toparent:string;
    @Input() toparent2:string='Rocksta';
    @Input() toparent3;


}