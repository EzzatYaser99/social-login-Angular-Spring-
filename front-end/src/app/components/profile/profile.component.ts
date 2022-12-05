import {Component, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements  OnInit{


  user: SocialUser =new SocialUser();
   isLogin: boolean =false;
  constructor(private authService: SocialAuthService) {
  }
  ngOnInit(): void {

    this.authService.authState.subscribe(
      data => {
        this.isLogin =(data != null);
this.user=data;
      }
    );
  }

}
