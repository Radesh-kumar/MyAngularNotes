import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  template: `
    <h1>
      COMP1
    </h1>
  <ul class="items">
      <li *ngFor="let department of departments"  (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class Comp1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ];
  // R O U T E   P A R A M E T E R S   S E C T I O N

  onSelect(department) {
    this.router.navigate(['/comp1', department.id]);
    // this.router.navigate([department.id], { relativeTo: this.route });
  }

  // WE ARE NAVIGATING FROM THE TS FILE BUT NOTE FROM THE ROUTING MODULE
  // IN ORDER TO DO THIS WE HAVE TO IMPORT ROUTER AND DI IN THE CONSTRUCTOR
  // AND THEN WE US THIS SYNTAX TO NAVIGATE -- this.router.navigate(['<FROM PATH>', <PARMATEER>]);
  
}
