/**
 * Created by nitish on 29/1/17.
 */


import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {User} from "./user.class";
@Injectable()
export class LoginService {


  private response:any;
  private loginUrl="http://www.mistu.org/etutor/login.php/";

  public static isUserLoggedIn:boolean=false;
  public static welcomeMessage="eTutor Admin Panel";
  public static user:User;


  constructor(private _http:Http) { }
  attemptLogin(loginInfo:any):Observable<User>{
    console.log("User data inside service: "+JSON.stringify(loginInfo));
    let headers = new Headers();
    headers.append('Content-Type',
      'application/json');

    return this._http.post(this.loginUrl,JSON.stringify(loginInfo),headers)
      .map((response:Response)=><User> response.json())
      .do(data=>console.log("Login Response"+JSON.stringify(data)));

  }


}
