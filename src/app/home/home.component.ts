import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _servises: MoviesService) {

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  trendingpeople: any = []
  trendingtv: any = []
  trendingMovies: any = []

  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/'

  ngOnInit(): void {
    this._servises.getTrending("movie").subscribe({
      next: (response) => this.trendingMovies = response.results.slice(0, 10)

    })



    this._servises.getTrending("person").subscribe({
      next: (response) => {
        for (let i = 0; i < response.results.length; i++) {
          if (response.results[i].profile_path == null) {
            response.results[i].profile_path = "../../assets/download.png"

          }
          else {
            response.results[i].profile_path = this.imagePrefix + response.results[i].profile_path;
          }


        }
        this.trendingpeople = response.results.slice(0, 10)
      }
    })
    this._servises.getTrending("tv").subscribe({
      next: (response) => this.trendingtv = response.results.slice(0, 10)

    })

  }

}
