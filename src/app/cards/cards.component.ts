import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  dailyStatus = ['Confirmed', 'Active', 'Recovered', 'Deaths'];
  currentData = [];
  constructor(private covidService: CovidService) {
    this.covidService.getStateData()
      .subscribe(data => {
        this.currentData = data['statewise'][0];
        console.log(this.currentData);

      });
  }

  ngOnInit() {
  }

}
