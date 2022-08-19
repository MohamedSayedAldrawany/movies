import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(x:string):Observable<any>
   {
    return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${x}/week?api_key=0baa4f6631f988d3d231179bb354a44b`)

  }

  getMoviesDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0baa4f6631f988d3d231179bb354a44b&language=en-US`)
  }
  getMoviesbyPagnation(pagNum:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=0baa4f6631f988d3d231179bb354a44b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagNum}`)
  }
}
