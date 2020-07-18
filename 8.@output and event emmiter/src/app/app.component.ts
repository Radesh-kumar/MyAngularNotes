import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<app-child (valueChange)='displayCounter($event)'>{{c}}</app-child>
    `
})
export class AppComponent implements OnInit {
    ngOnInit() {
    }
    displayCounter(x) {
        x;

    }
}