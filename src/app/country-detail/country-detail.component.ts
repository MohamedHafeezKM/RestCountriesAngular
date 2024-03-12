import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { CountryserviceService } from '../service/countryservice.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {
    country:any
    name:any
    constructor(private route:ActivatedRoute,private service:CountryserviceService){
      this.name=this.route.snapshot.params['name']
      service.getCountryDetail(this.name).subscribe(data=>{
        this.country=data
      })
      
    }

    dispatchRegionName(region:any){
      this.service
    }
}
