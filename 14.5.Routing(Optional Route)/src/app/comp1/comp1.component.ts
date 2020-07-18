import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comp1',
  template: `
    <h1>
      COMP1
    </h1>
  <ul class="items">
      <li *ngFor="let department of departments"  (click)="onSelect(department)" [class.selected]="isSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class Comp1Component implements OnInit {
  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

    });
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
  

  //O P T I O N A L  R O U T E 
  //this is used to highlight the block when we press back button
  isSelected(department) { return department.id === this.selectedId; }
}
