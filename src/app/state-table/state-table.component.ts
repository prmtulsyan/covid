import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.scss']
})
export class StateTableComponent implements OnInit {

  rowTestData;
  rowData;
  constructor(private covidService: CovidService) {}

  columnDefs = [
    {headerName: 'State', field: 'state' },
    {headerName: 'Active', field: 'active' },
    {headerName: 'Confirmed', field: 'confirmed' },
    {headerName: 'Deaths', field: 'deaths' },
    {headerName: 'Deltaconfirmed', field: 'deltaconfirmed', hide: true },
    {headerName: 'Deltadeaths', field: 'deltadeaths', hide: true },
    {headerName: 'Deltarecovered', field: 'deltarecovered', hide: true },
    {headerName: 'Lastupdatedtime', field: 'lastupdatedtime', hide: true },
    {headerName: 'Recovered', field: 'recovered' },
    {headerName: 'Statecode', field: 'statecode', hide: true },
    {headerName: 'Statenotes', field: 'statenotes', hide: true },

];

// rowData = [
//     { state: 'Toyota', confirmed: 'Celica', active: 35000, deceased: 1000 },
//     { state: 'Ford', confirmed: 'Mondeo', active: 32000, deceased: 1000 },
//     { state: 'Porsche', confirmed: 'Boxter', active: 72000, deceased: 1000 },
//     { state: 'Porsche', confirmed: 'Boxter', active: 72000, deceased: 1000 }

// ];

ngOnInit() {
  this.covidService.getStateData()
    .subscribe(data => {
      this.rowData = data['statewise'].slice(1);
    });
}

}
