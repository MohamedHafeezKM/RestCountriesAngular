import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RestCountriesComponent} from './rest-countries/rest-countries.component'
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  {path:'',component:RestCountriesComponent},
  {path:'country/:name',component:CountryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
