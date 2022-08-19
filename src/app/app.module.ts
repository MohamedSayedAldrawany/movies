import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule  } from "@angular/common/http";
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { SettingsComponent } from './profile/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';``
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TvComponent,
    PeopleComponent,
    MoviesComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    MoviesDetailsComponent,
    WatchPipe,
    SeemorePipe,
    SearchPipe,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,
  CarouselModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
