import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootUrl: string = environment.url + '/api/IdentityManagement/Authentication';

  private config = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

  constructor(private _http: HttpClient) {
  }

  //for signup request
  registerUser(user: object) {
    console.log(JSON.stringify(user));
    return this._http.post<User>(this.rootUrl + '/Register', JSON.stringify(user), {headers: this.config});
  }

  //for login request
  authenticateUser(user: object) {
    return this._http.post(this.rootUrl + '/Login', JSON.stringify(user), {headers: this.config});
  }

}
