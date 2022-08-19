import { AuthService } from './../auth.service';
import { FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _service:AuthService,private _router:Router) { }

  errorMessage:string='';
  isloading:boolean=false;

  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[Validators.min(16),Validators.max(50),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),

  })


  SubmitRegisterForm(registerForm:FormGroup){
    this.isloading=true;

    if(registerForm.valid){
      this._service.signUP(registerForm.value).subscribe({
        next:(res)=>{

          if(res.message==='success'){
            this.isloading=false
            this._router.navigate(['/login'])

          }
          else{
            this.isloading=false

          this.errorMessage=res.message
          }



        }
      })
    }
    
  }

  ngOnInit(): void {
  }

}
