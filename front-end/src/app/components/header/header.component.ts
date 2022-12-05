import {Component, OnInit} from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{
   isLogin: boolean=false;
   user: SocialUser= new SocialUser;
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
