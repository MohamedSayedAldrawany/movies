import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  moviesId:string=''
  moviesDetails:any;
  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/'

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { }
 

  ngOnInit(): void {

  this.moviesId=  this._ActivatedRoute.snapshot.params['id']
    this._MoviesService.getMoviesDetails(this.moviesId).subscribe({
      next:(response)=> this.moviesDetails=response
    })
  }

}
