import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <h1>
      child2 works!
    </h1>
  `,
  styles: []
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
