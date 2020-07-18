import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { servercomponent } from '../server/server.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { Customdirective2Directive } from './customdirective2.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,servercomponent, CustomdirectiveDirective, Customdirective2Directive ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
