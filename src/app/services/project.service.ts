import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const source = 'http://localhost:8097/api/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  store(data: any) {
    return this.http.post(`${source}`, data);
  }

  update(id:any, data: any) {
    return this.http.put(`${source}/${id}`, data);
  }

  getAll() {
    return this.http.get(`${source}`);
  }

  delete(id: any) {
    return this.http.delete(`${source}/${id}`);
  }
}
