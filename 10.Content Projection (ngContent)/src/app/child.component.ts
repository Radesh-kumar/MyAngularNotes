
import { Component} from '@angular/core';
@Component({
    selector: 'app-child',
    template: `
    <ng-content select=".cc2"></ng-content>
    <ng-content select=".cc3"></ng-content>

`
})
export class AppChildComponent {

    
}