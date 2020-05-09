import { CovidService } from './../covid.service';
import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnChanges {
  @Input() stateCode;
  Linechart = [];
  date = [];
  stateDate = [];
  dailyConfirmed = [];
  statesDaily = [];
  confirmedData = [];
  constructor(private covidService: CovidService) { }

  ngOnChanges() {

    this.date = [];
    this.dailyConfirmed = [];

    if (this.stateCode === 'TT') {
      this.covidService.getStateData()
        .subscribe(data => {
          console.log(data);
          for (let i = 0; i < data['cases_time_series'].length; i++)
            this.date.push(data['cases_time_series'][i]['date']);
          console.log(this.date);
          for (let i = 0; i < data['cases_time_series'].length; i++)
            this.dailyConfirmed.push(data['cases_time_series'][i]['dailyconfirmed']);
          console.log(this.dailyConfirmed);
          this.Linechart = new Chart('canvasline', {
            type: 'line',
            data: {
              labels: this.date,
              datasets: [
                {
                  data: this.dailyConfirmed,
                  lineTension: 0.3,
                  backgroundColor: "rgba(78, 115, 223, 0.05)",
                  borderColor: "rgba(78, 115, 223, 1)",
                  pointRadius: 0,
                  pointBackgroundColor: "rgba(78, 115, 223, 1)",
                  pointBorderColor: "rgba(78, 115, 223, 1)",
                  pointHoverRadius: 3,
                  pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                  pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                  pointHitRadius: 10,
                  pointBorderWidth: 2,
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              layout: {
                padding: {
                  left: 10,
                  right: 25,
                  top: 25,
                  bottom: 0
                }
              },
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    maxTicksLimit: 9
                  }
                }],
                yAxes: [{
                  ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                  },
                  gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                  }
                }],
              },
              legend: {
                display: true
              },
            }
          });
        });
    }

    else {
      this.covidService.getStateDaily()
        .subscribe(data => {
          this.statesDaily = data['states_daily'];
          this.confirmedData = this.statesDaily.filter(d => d.status === 'Confirmed');
          this.confirmedData.forEach(entry => this.date.push(entry.date));
          this.confirmedData.forEach(entry => this.dailyConfirmed.push(entry[this.stateCode.toLowerCase()]));
          this.Linechart = new Chart('canvasline', {
            type: 'line',
            data: {
              labels: this.date,
              datasets: [
                {
                  data: this.dailyConfirmed,
                  lineTension: 0.3,
                  backgroundColor: "rgba(78, 115, 223, 0.05)",
                  borderColor: "rgba(78, 115, 223, 1)",
                  pointRadius: 0,
                  pointBackgroundColor: "rgba(78, 115, 223, 1)",
                  pointBorderColor: "rgba(78, 115, 223, 1)",
                  pointHoverRadius: 3,
                  pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                  pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                  pointHitRadius: 10,
                  pointBorderWidth: 2,
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              layout: {
                padding: {
                  left: 10,
                  right: 25,
                  top: 25,
                  bottom: 0
                }
              },
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    maxTicksLimit: 9
                  }
                }],
                yAxes: [{
                  ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                  },
                  gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                  }
                }],
              },
              legend: {
                display: false
              },
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
              }
            }
          });
        });
    }

  }

}
