import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {
  regionSubjectObj=new Subject()
  constructor(private http:HttpClient) {
    
  }
  getAllCountires(){
    return this.http.get('https://restcountries.com/v2/all/')

  }
  getCountryDetail(name:any){
    return this.http.get(`https://restcountries.com/v2/name/${name}?fullText=true`)
  }

  sendRegionNameService(region:any){
    return this.regionSubjectObj.next(region)
  }

  getCountriesByRegion(region:any){
    let url=`https://restcountries.com/v2/region/${region}`
  
    return  this.http.get(url)
  }
}
