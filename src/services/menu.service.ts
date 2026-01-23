import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private API_URL = `${environment.apiUrl}/api/menu`;
  constructor(private http: HttpClient) {}
  getMenu() {
    return this.http.get(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  addMenu(menuData: any) {
    return this.http.post(this.API_URL, menuData);
  }

  deleteDataById(id: any, deleteData: any) {
    return this.http.delete(`${this.API_URL}/${id}`, deleteData);
  }
}
