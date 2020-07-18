import { Component, EventEmitter, Output, Input,OnInit } from '@angular/core';
@Component({
    selector: 'app-child',
    template: ` <h2>{{lol}}</h2>  `
})
export class AppChildComponent {
  lol:string='Default Value';
    data1=function()
    {
      this.lol= "data1:Waking up, half past five Blood on pillow and one bruised eye Drunk too much, you know what Im like";
      return this.lol;
    }
    data2=function(){
      this.lol="data2:Waking up, half past five Blood on pillow and one bruised eye Drunk too much, you know what Im like";
      return this.lol;
    }
    ngOnInit(){

    }
    
}