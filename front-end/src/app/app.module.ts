import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialComponent } from './components/social/social.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:SocialComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',redirectTo:'/home'}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SocialComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
