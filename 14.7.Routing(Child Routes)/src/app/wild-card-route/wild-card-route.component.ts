import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wild-card-route',
  template: `
    <h1>
      Page Not Found
    </h1>
  `,
  styles: []
})
export class WildCardRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// Wild card route:

// it ill appear if the route mentioned in url is not present
// the route should present at the bottom most line

// If we use Wild card route we must have a DEFAULT ROUTE/PATH
// to over come this situation we can use new default path or we can redirect it to an existing old path/url

