import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryserviceService } from '../service/countryservice.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent {
  countries:any
  constructor(private service:CountryserviceService){
    this.service.getAllCountires().subscribe(data=>{this.countries=data})

    this.service.regionSubjectObj.subscribe(region=>{
     this.service.getCountriesByRegion(region).subscribe(data=>{
      this.countries=data
     })
    })
  }  
}
