import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey: string = 'n3joFvT2wIlODsFdnLhVKOcgPYwiUAUbWHUb29zG'

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<string> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get<string>(url);
  }
}
