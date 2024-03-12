import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestCountriesComponent } from './rest-countries/rest-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { RegionComponent } from './region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    RestCountriesComponent,
    CountryDetailComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
