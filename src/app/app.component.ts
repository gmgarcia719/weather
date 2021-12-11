import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from './weather-config/config.service';
import { WeatherAPI } from './weather-config/weatherAPI';
// import citiesJSON from '../assets/city.list.json';
import { CityList } from './weather-config/city-list';
import { Subscription } from 'rxjs';
import { Weather } from './interfaces/weather';
import { WeatherDetail } from './interfaces/weather-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weather';
  allWeatherData: WeatherAPI[] = [];
  weather!: Weather;
  weatherDetails!: WeatherDetail;
  wind!: {
    speed: number;
    deg: number;
  };
  apiSubscription: Subscription = new Subscription();

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.weatherSubject.subscribe((data: WeatherAPI) => {
      this.weather = data.weather[0];
      this.weatherDetails = data.main;
      this.wind = data.wind;
    });
    this.configService.getWeatherAPI();
  }
  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
