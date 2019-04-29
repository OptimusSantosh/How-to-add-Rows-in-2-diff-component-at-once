import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { LocationDataService } from '../location-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  cols: any[];

  addressData: any[];

  selectedValue: any;

  items: MenuItem[];

  subscription: Subscription;

  constructor(private LocationDataServiceRetriever: LocationDataService) { }

  ngOnInit() {

    this.LocationDataServiceRetriever.getJSON().subscribe(data => {
      this.addressData = data;
      console.log("The data is ", this.addressData);
    })
    this.cols = [
      { field: 'Location_Nbr', header: 'Loc#' },
      { field: 'LocId', header: 'Loc ID' },
      { field: 'Street', header: 'Street' },
      { field: 'isUpload', header: 'Upload Status' }
    ];
    this.items = [
      { label: 'Add', icon: 'pi pi-search', command: (event) => this.addLocationDetails(this.selectedValue) },
      { label: 'Remove', icon: 'pi pi-times', command: (event) => this.removeData(this.selectedValue) }
    ];
    this.LocationDataServiceRetriever.getLocations()
      .subscribe(data => this.addressData = data);
  }
  removeData(selectedValue: any): void {
    this.LocationDataServiceRetriever.removeData(selectedValue);
  }
  addLocationDetails(selectedValue: any): void {
    this.LocationDataServiceRetriever.addData();
  }

}