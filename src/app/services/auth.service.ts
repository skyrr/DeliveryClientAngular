import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:54786/auth/'

  constructor(private http:HttpClient) { }

  register(user){
    return this.http.post(this.baseUrl+'register', user)
  }

  login(user){
    return this.http.post(this.baseUrl+'login', user)
  }

  logout(){
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
  }

  get getUserName(){
    return localStorage.getItem('userName');
  }

  get getUserId(){
    return localStorage.getItem('userId');
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token_value');
  }

}
