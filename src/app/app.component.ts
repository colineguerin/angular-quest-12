import { Component, OnInit } from '@angular/core';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'angular-quest-12';
  
  imgOfTheDay: string = '';

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.getNasaImage();
  }

  getNasaImage() {
    this.nasaService.getImageOfTheDay().subscribe((url: string) => {
      this.imgOfTheDay = url;
    });
  }
}
