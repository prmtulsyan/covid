import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  url = 'https://api.covid19india.org/'
  constructor(private http: HttpClient) { }

  getStateData() {
    return this.http.get(this.url + 'data.json');
  }

  getStateDaily() {
    return this.http.get(this.url + 'states_daily.json');
  }

}
