import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const source = 'http://localhost:8097/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: any) {
    return this.http.post(`${source}`, data);
  }

  login(data: any) {
    return this.http.post(`${source}/login`, data);
  }
}
