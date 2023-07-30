
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a07d4fb0f7d502945fa5fdf8f4745e4d'; // Replace with your actual OpenWeather API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByLocation(location: string) {
    const url = `${this.apiUrl}?q=${location}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
