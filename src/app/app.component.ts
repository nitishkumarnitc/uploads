import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormHelperService} from "./service/form-helper.service";
import {LoginService} from "./service/login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormHelperService]
})
export class AppComponent {

  constructor(private loginService:LoginService,private router:Router){}

  getWelcomeMessage(){
    return LoginService.welcomeMessage;
  }

  getIsUserLoggedIn(){
    return LoginService.isUserLoggedIn;
  }

  logOut(){
    LoginService.isUserLoggedIn=false;
    this.router.navigate(['login']);
  }
}
