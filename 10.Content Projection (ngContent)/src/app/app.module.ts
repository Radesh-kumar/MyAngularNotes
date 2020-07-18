import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppChildComponent } from './child.component';
import { AppChildComponent2 } from './child.component2';
import { AppChildComponent3 } from './child.component3';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AppChildComponent,AppChildComponent2,AppChildComponent3 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
