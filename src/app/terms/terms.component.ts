import { Component, OnInit } from '@angular/core';
import { LocationDataService } from './../location-data.service';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  termsData: any[];

  selectedValue: any;

  items: MenuItem[];

  cols: { field: string; header: string; }[];
  
  constructor(private LocationDataServiceRetriever : LocationDataService) { }

  ngOnInit() {
    this.LocationDataServiceRetriever.getJSON().subscribe(data => {
      this.termsData = data;
    });

    this.LocationDataServiceRetriever.getLocations()
    .subscribe(data => this.termsData = data);
    
    this.cols = [
      { field: 'Location_Nbr', header: 'loc#' },
      { field: 'LocId', header: 'Loc ID' },
      { field: 'Street', header: 'Street' },
      { field: 'City', header: 'City' },
      { field: 'Country', header: 'Country' },
      { field: 'LimitType', header: 'Limit Type' },
      { field: 'LimitBuilding', header: 'Limit Building' },
      { field: 'LimitContent', header: 'Limit Content ' },
      { field: 'LimitOthers', header: 'Limit Others ' }
  ];
  this.items = [
    { label: 'Add', icon: 'pi pi-search', command: (event) => this.addLocationDetails(this.selectedValue) },
    { label: 'Remove', icon: 'pi pi-times', command: (event) => this.removeData(this.selectedValue) }
  ];
  this.LocationDataServiceRetriever.getLocations()
    .subscribe(data => this.termsData = data);
  }

  removeData(selectedValue: any): void {
    this.LocationDataServiceRetriever.removeData(selectedValue);
  }
  addLocationDetails(selectedValue: any): void {
    this.LocationDataServiceRetriever.addData();
  }

}
