// Import stylesheets
import './style.css';
 class AppComponent  {

    firstName:string; 
    lastName:string;
    constructor(firstname,lastname) { 
        this.firstName = firstname;
        this.lastName = lastname;
    }

    name=function() { 
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou=function() {
        return `Hey i'm ${this.name()}`;
    }

    
}
let Radesh=new AppComponent('Radesh','Kumar');
console.log(Radesh.whoAreYou());
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
<h1>${Radesh.whoAreYou()}</h1>  
`;