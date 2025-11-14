import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  url = 'http://localhost:3000/api/menu';
  constructor(private http: HttpClient) {}
  getMenu() {
    return this.http.get(this.url);
  }
  getDataById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  addMenu(menuData: any) {
    return this.http.post(this.url, menuData);
  }

  deleteDataById(id: any, deleteData: any) {
    return this.http.delete(`${this.url}/${id}`, deleteData);
  }
}
