import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { WildCardRouteComponent } from '../wild-card-route/wild-card-route.component';
import { RouteparamComponent } from '../routeparam/routeparam.component';
const routes: Routes = [
  //DEFAULT ROUTE
  { path: '', redirectTo:'/comp1',pathMatch:'full' },
  
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },

  //ROUTE PARAMETERS(:id => Parameter )
  { path: 'comp1/:id', component: RouteparamComponent},
  
  //WILD CARD ROUTE
  { path: '**', component: WildCardRouteComponent }

  // O P T I O N A L   R O U T E 
  // WE DONT HAVE specify any path or parameter here in rotung module for OPR


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [Comp1Component, Comp2Component, WildCardRouteComponent, RouteparamComponent ]