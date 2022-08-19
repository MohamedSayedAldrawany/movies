import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path:"",redirectTo:"home",pathMatch:'full'},
{path:"home",canActivate:[AuthGuard],component:HomeComponent},
{path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
{path:"people",canActivate:[AuthGuard],component:PeopleComponent},
{path:"tv",canActivate:[AuthGuard],component:TvComponent},
{path:"moviesdetails/:id",canActivate:[AuthGuard],component:MoviesDetailsComponent},
{path:"login",component:LoginComponent},
{path:"settings",loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule)},
{path:"register",component:RegisterComponent},
{path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
