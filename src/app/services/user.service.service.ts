import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/user/create`, {
      name,
      email,
      password,
    });
  }
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/user/login`, {
      email,
      password,
    });
  }
}
