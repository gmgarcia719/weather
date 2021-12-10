import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Weather } from './weather';
import { CityList } from './city-list';
// import citiesJson from '../../assets/city.list.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // private cities: CityList[] = citiesJson;
  weatherSubject: Subject<Weather> = new Subject<Weather>();
  private apiUrl: string =
    'https://api.openweathermap.org/data/2.5/weather?id=4644585&units=imperial&appid=d89be5ffd33f16d46de24b570163902d';
  constructor(private http: HttpClient) {}

  getWeatherAPI() {
    return this.http
      .get<Weather>(this.apiUrl)
      .subscribe((fetchedWeather: Weather) => {
        this.weatherSubject.next(fetchedWeather);
      });
  }

  // getAllCities() {
  //   const cityNames: string[] = [];

  //   this.cities.forEach((x: CityList) => {
  //     cityNames.push(x.name);
  //   });
  //   return cityNames;
  // }
}
