
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `
})
export class AppChildComponent {
    @Output() valueChange = new EventEmitter();
    
    valueChanged() { // You can give any function name
        var counter = function(){
            let a =100;
            let b=200;
            console.log(a+b);
        }
        this.valueChange.emit(counter());
    }
}