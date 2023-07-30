import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule], // Include AppRoutingModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
