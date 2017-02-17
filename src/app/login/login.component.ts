import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.scss']
})
export class LoginComponent implements OnInit {

  private dataGoingToServer=false;

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',
        Validators.compose(
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]
        )
      ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })

  }

  login(loginInfo) {
    console.log("User credential to server : " + JSON.stringify(loginInfo));
    this.dataGoingToServer=true;
    this.loginService.attemptLogin(loginInfo)
      .subscribe(response => {
        this.loginResponse(response)
      }, error => this.errorMessage = <any> error);

  }

  loginResponse(response: any) {
    this.dataGoingToServer=false;
    console.log("Login Response Inside Component", response);
    if (response['isVerified'] == 1) {
      console.log("User Ok, Response is " + JSON.stringify(response));
      LoginService.isUserLoggedIn=true;
      LoginService.user=response;
      LoginService.welcomeMessage="Welcome "+response['fName'];
      this.router.navigateByUrl('home');
    } else {
      console.log("Login false");
    }


  }
}
