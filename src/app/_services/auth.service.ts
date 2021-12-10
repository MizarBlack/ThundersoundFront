import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(nickname: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      nickname,
      password
    }, httpOptions);
  }

  register(nickname: string, login: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nickname,
      login,
      password
    }, httpOptions);
  }
}
