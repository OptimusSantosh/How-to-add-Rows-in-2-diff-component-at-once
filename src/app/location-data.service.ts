import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  locationData:any;

  defaultLocationData = {
    "Location_Nbr": 111737,
    "LocId": "",
    "Street": "",
    "City": "",
    "Country": "USA",
    "isUpload": false,
    "Currency": "USD",
    "RVBuilding": 0.0,
    "RVOther": 0.0,
    "RVContent": 0.0,
    "RVTime": "00:00:00",
    "Duplicate_Ind": false,
    "LimitType": "0.0",
    "LimitBuilding": 0.0,
    "LimitOthers": 0.0,
    "LimitContent": 0.0
  };

  private broadcastData = new Subject<[]>();

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {this.locationData = data});
   }

  public getJSON(): Observable<any> {
    return this.http.get('http://localhost:3000/locationDetails');
  }
  public getLocations(){
    return this.broadcastData.asObservable();
  }

  public addData() {
      this.locationData.push(this.defaultLocationData);
      this.broadcastData.next(this.locationData);
  }

  public removeData(value:any) {
    let index = -1;
      for (let i = 0; i < this.locationData.length; i++) {
          if (this.locationData[i].Location_Nbr === value.Location_Nbr) {
              index = i;
              break;
          }
      }
      this.locationData.splice(index, 1);
    this.broadcastData.next(this.locationData);
}
}
