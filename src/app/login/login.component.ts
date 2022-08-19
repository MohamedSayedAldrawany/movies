import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _service:AuthService,private _router:Router) { }

  errorMessage:string='';
  isloading:boolean=false;

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),

  })


  SubmitloginForm(loginForm:FormGroup){
    this.isloading=true;

    if(loginForm.valid){
       this._service.signin(loginForm.value).subscribe({
        next:(response)=>{
          if(response.message==='success'){
            this.isloading=false;
            localStorage.setItem("userToken",response.token)
            this._service.saveUserdata();






            this._router.navigate(['/home'])
          }
          else{
            this.isloading=false;
            this.errorMessage=response.message
          }
          
        }
      })
    }

  
    
  }

  ngOnInit(): void {
  }

}
