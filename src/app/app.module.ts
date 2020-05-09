import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CovidService } from './covid.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { StateTableComponent } from './state-table/state-table.component';
import { LinechartComponent } from './linechart/linechart.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    StateTableComponent,
    PieChartComponent,
    LinechartComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule
  ],
  providers: [
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
