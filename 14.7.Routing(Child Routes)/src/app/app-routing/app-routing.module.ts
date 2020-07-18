import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { WildCardRouteComponent } from '../wild-card-route/wild-card-route.component';
import { RouteparamComponent } from '../routeparam/routeparam.component';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

const routes: Routes = [
  //DEFAULT ROUTE
  { path: '', redirectTo:'/comp1',pathMatch:'full' },
  
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },

  //ROUTE PARAMETERS(:id => Parameter )
  //And
  //Child routes
  { 
    path: 'comp1/:id',
    component: RouteparamComponent,
    children: [
      { path: 'overview', component: Child1Component },
      { path: 'contact', component: Child2Component }
    ]
  },
  
  //WILD CARD ROUTE
  { path: '**', component: WildCardRouteComponent }

  // O P T I O N A L   R O U T E 

  // WE DONT HAVE specify any path or parameter here in rotung module for OPR

  //R E L A T I V E  R O U T E
  //absolute routes are real pain in ass
  // if we change the name of the one of the route in the routing module
  //we have to change every corresponding name each time where we used it
  //Instead we use relative route

  //After changing comp1 to comp11
  //those which have relative routes wont show page not found Remaining will show


  //C H I L D   R O U T E S 
  //WE INTIALIZE children[...]  from the parent route which makes it as child route
  //generate components intialize them in routing module
  // *** Finally we mus place <router-outlet></router-outlet> in the parent route containing html ***
  //To  show the view

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [Comp1Component, Comp2Component, WildCardRouteComponent, RouteparamComponent, Child1Component, Child2Component, ]