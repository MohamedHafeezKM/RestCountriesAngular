import { Component } from '@angular/core';
import { CountryserviceService } from '../service/countryservice.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  constructor(private service:CountryserviceService){
    
  }
  dispatchRegionName(region:any){
    this.service.sendRegionNameService(region)
  }



}
