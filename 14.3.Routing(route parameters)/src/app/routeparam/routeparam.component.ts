import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routeparam',
  template: `
    <h1>
      routeparam works!
    </h1>
     <h2>
      Your selected id is {{departmentId}}
    </h2>
    

  `,
  styles: []
})
export class RouteparamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public departmentId;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId=id;
  }

}

  //First we have to create route paramater in routing module
  //{ path: 'comp1/:id', component: RouteparamComponent},

  // WE ARE NAVIGATING FROM THE comp1.TS FILE BUT NOTE FROM THE ROUTING MODULE(in comp1)
  // IN ORDER TO DO THIS WE HAVE TO IMPORT ROUTER AND DI IN THE CONSTRUCTOR(in comp1)
  // AND THEN WE US THIS SYNTAX TO NAVIGATE -- this.router.navigate(['<FROM PATH>', <PARMATEER>]);         (in comp1)


  //ACTIVATED ROUTE SERVICE - With the help of this we can read the values of parameters and pass this in the VIEW
  //final projecting our view using binding

