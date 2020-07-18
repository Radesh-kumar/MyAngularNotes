import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <h1>
      child1 works!
    </h1>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
