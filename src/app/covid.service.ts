import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  httpUrl = 'https://api.covid19india.org/data.json';
  constructor(private http: HttpClient) { }

  getStateData() {
    return this.http.get(this.httpUrl);
  }
}
