import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <p>
      comp1 works!
    </p>
  `,
  styles: []
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
