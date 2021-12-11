import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from './weather-config/config.service';
import { Weather } from './weather-config/weather';
// import citiesJSON from '../assets/city.list.json';
import { CityList } from './weather-config/city-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weather';
  allWeatherData: Weather[] = [];
  weather!: { main: string; description: string; icon: string };
  weatherDetails!: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind!: {
    speed: number;
    deg: number;
  };
  apiSubscription: Subscription = new Subscription();

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.weatherSubject.subscribe((data: Weather) => {
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
