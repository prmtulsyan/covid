import { CovidService } from './covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'covid19';
  rowTestData;
  states;
  selectedStateId;
  selectedState;
  selectedStateCode = 'TT';

  constructor(private covidService: CovidService) {}

ngOnInit() {
  this.covidService.getStateData()
    .subscribe(data => {
      this.states = data['statewise'];
    });
}

onSubmit(selectedStateId) {
  this.selectedStateId = selectedStateId;
  this.selectedState = this.states[selectedStateId];
  this.selectedStateCode = this.selectedState['statecode'];
}

}
