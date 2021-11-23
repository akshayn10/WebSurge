import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';



@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/users/register";
  private _loginUrl = "http://localhost:3000/users/login";

  constructor(private http: HttpClient,
              private router: Router) { }

  registerUser(body: RegisterModel) {
    return this.http.post<any>(this._registerUrl,body )
  }

  loginUser(body: LoginModel) {
    return this.http.post<any>(this._loginUrl, body)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
