import { Component, OnInit, Input } from '@angular/core';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() selectedStateId;
  myPieChart = [];
  dropDown = {};
  constructor(private covidService: CovidService) {
   }
   ngOnChanges(){
     if(!this.selectedStateId) this.selectedStateId = 0;
    this.covidService.getStateData()
    .subscribe(data => {
      this.dropDown = data;
      this.myPieChart = new Chart('canvaspie', {
        type: 'doughnut',
        data: {
          datasets: [{
              data: [data['statewise'][this.selectedStateId]['active'], data['statewise'][this.selectedStateId]['recovered'], data['statewise'][this.selectedStateId]['deaths']],
              borderColor: '#3cba9f',
              backgroundColor: [
                '#3cb371',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
                '#00FFFF',
                '#f990a7',
                '#aad2ed',
                '#FF00FF',
                'Blue',
                'Red',
                'Blue'
              ],
              fill: true
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
              'Active',
              'Recovered',
              'Deceased'
          ]
      },
        options: {
          maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
        }
    });
    });
   }
  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
}
