import { LocationDataService } from '../location-data.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  cols: any[];

  valueData: any[];

  selectedValue: any;

  items: MenuItem[];

  constructor(private LocationDataServiceRetriever : LocationDataService) { }

  ngOnInit() {
    this.LocationDataServiceRetriever.getJSON().subscribe(data => {
      this.valueData = data;
    });

    this.LocationDataServiceRetriever.getLocations()
    .subscribe(data => this.valueData = data);

    this.cols = [
      { field: 'Location_Nbr', header: 'loc#' },
      { field: 'LocId', header: 'Loc ID' },
      { field: 'Street', header: 'Street' },
      { field: 'City', header: 'City' },
      { field: 'Country', header: 'Country' },
      { field: 'RVBuilding', header: 'RVBuilding' },
      { field: 'RVOther', header: 'RVOther' },
      { field: 'RVContent', header: 'RVContent' },
      { field: 'RVTime', header: 'RVTime' },
  ];
  this.items = [
    { label: 'Add', icon: 'pi pi-search', command: (event) => this.addLocationDetails(this.selectedValue) },
    { label: 'Remove', icon: 'pi pi-times', command: (event) => this.removeData(this.selectedValue) }
  ];

  }

  removeData(selectedValue: any): void {
    this.LocationDataServiceRetriever.removeData(selectedValue);
  }
  addLocationDetails(selectedValue: any): void {
    this.LocationDataServiceRetriever.addData();
  }

}