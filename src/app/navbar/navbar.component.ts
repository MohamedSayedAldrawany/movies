import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin: boolean = false;
  userInfo:any={}

  constructor(private _authservices: AuthService) { }
  logout(){
    this._authservices.signOut()
  }

  ngOnInit(): void {
    this._authservices.userdata.subscribe({
      next:() => {
        if (this._authservices.userdata.getValue() != null) {
          this.islogin = true
          this.userInfo=this._authservices.userdata;
          console.log(this.userInfo.getValue().first_name);
          
          
        }
        else {
          this.islogin = false
        }

      }
    })
  }

  

}
