import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Rocksta';
// Services are used to remove the copies od code which is known as dry code
// when we keep the repeating code in a service it can be used in any component we want without repeatition
// Regestring service in a parent components results the same in every child component
// Regestring service in a Appcomponents results the same in every component in the project
// Regestring service in a AppModule results the same in every component in the project and we can inject service in an other service using this method(@Injectable)
// After using provider: in parent component we should not again intialize it in child component,it fill further create new instance and further lead error
}
