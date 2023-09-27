import { Component, OnInit } from '@angular/core';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'angular-quest-12';

  imgOfTheDay: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getNasaImage();
  }

  getNasaImage(): void {
    this.nasaService.getImageOfTheDay().subscribe(response => {
      this.imgOfTheDay = response;
    });
  }
}
