import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-routeparam',
  template: `
    <h1>
      routeparam works!
    </h1>
     <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>

    <h2>
      Your selected id is {{departmentId}}
    </h2>
    

  `,
  styles: []
})
export class RouteparamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public departmentId;
  ngOnInit() {

    //S N A P S H O T   M E T H O D

    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId=id;

    //paramMap M E T H O D

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;

    });

  }


  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/comp1', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/comp1', nextId]);
  }


  gotoDepartments() {
    
    let selectedId = this.departmentId ? this.departmentId : null;

    // ? is used for null check
  
    this.router.navigate(['/comp1', {id: selectedId}]);   
  }

}

  //First we have to create route paramater in routing module
  //{ path: 'comp1/:id', component: RouteparamComponent},

  // WE ARE NAVIGATING FROM THE comp1.TS FILE BUT NOTE FROM THE ROUTING MODULE(in comp1)
  // IN ORDER TO DO THIS WE HAVE TO IMPORT ROUTER AND DI IN THE CONSTRUCTOR(in comp1)
  // AND THEN WE US THIS SYNTAX TO NAVIGATE -- this.router.navigate(['<FROM PATH>', <PARMATEER>]);         (in comp1)


  //ACTIVATED ROUTE SERVICE - With the help of this we can read the values of parameters and pass this in the VIEW
  //final projecting our view using binding

  //Draw back of  S N A P S H O T   M E T H O D
  //SNAP SHOT CHANHES THE ROUTE IN URL BUT IT ILL NOT UDATE VIEW

  //WE USE paramMap instead IT WILL MAKE USE OF OBSERVABLES/SUBSCRIBE
  //SO EVERY TIME ID GET CHANGES THE VIEW WILL GET UPDATE AUTOMATICALLY
  //IT WILL RETRIEVE DATA FROM THE URL
