import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any = []

  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/'
  pages:number[]=[];
  term:string=''

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages =new Array(15).fill('').map((x,i)=> i+1)

    this._MoviesService.getMoviesbyPagnation(1).subscribe({
      next:(response)=>this.trendingMovies=response.results
    })
  }
  test(pageNumber:number){

    this._MoviesService.getMoviesbyPagnation(pageNumber).subscribe({
      next:(response)=>this.trendingMovies=response.results
    })
  }

}
