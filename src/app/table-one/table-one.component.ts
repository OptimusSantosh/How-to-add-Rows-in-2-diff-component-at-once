import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})
export class TableOneComponent implements OnInit {

  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
  }

}