import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string = '';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeatherByLocation(this.location)
      .subscribe(
        (data: any) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error fetching weather data:', error);
          this.weatherData = null;
        }
      );
  }
}
