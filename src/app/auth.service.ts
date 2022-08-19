import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _httpclient:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
      this.saveUserdata()
    }
   }
  userdata=new BehaviorSubject(null);


  saveUserdata(){
    let encodedData=JSON.stringify(  localStorage.getItem("userToken"))
    let decodedData:any=jwtDecode(encodedData)
    this.userdata.next(decodedData);
    console.log(this.userdata);
    

    

  }

  signUP(formdata:object):Observable<any>
  {
   return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formdata)
  }
  signin(formdata:object):Observable<any>
  {
   return this._httpclient.post('https://route-egypt-api.herokuapp.com/signin',formdata)
  }

  signOut(){
    localStorage.removeItem("userToken"),
    this.userdata.next(null)
    this._router.navigate(['/login'])

  }
}
