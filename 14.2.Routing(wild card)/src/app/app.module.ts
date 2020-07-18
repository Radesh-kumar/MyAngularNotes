import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { servercomponent } from '../server/server.component';


import { RoutingComponents } from './app-routing/app-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';




@NgModule({
  imports: [BrowserModule, FormsModule,  AppRoutingModule],
  declarations: [AppComponent, HelloComponent, servercomponent, RoutingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
