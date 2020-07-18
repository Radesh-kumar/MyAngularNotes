import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Rocksta';
}
// Adding Routing options for the project where(ng new myproject--routing) not include

//   Step1: In index.html add < base href = "/" > in <head>

//   Step2: Add app - routing.module.ts in app folder and connect it to app.module.ts(main_module)
//   ng g m app-routing --module=app --routing --flat
// --flat puts the file in src / app instead of its own folder
// --module=app tells the CLI to register it in the imports array of the AppModule

// Step3: Create different components needed

// Step4:in const routes- ADD ROUTES / PATHS
// { path: 'comp1', component: Comp1Component }
// Also import Comp1Component

// Step5: @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// Step6: import required components and modules in app.module.ts
// And in @NgModule => imports => add modules
// @NgModule => declaration => add components

// Step7: <router-outlet > </router-outlet>
// paste it where ever we want to add a view

