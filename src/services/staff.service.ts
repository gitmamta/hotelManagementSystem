import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  url = 'http://localhost:3000/staff';
  constructor(private http: HttpClient) {}
  getAllStaff() {
    return this.http.get(this.url);
  }
  getDataById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  addStaff(staffData: any) {
    return this.http.post(this.url, staffData);
  }
  patchStaff(id: number, staffData: any) {
    return this.http.patch(`${this.url}/${id}`, staffData);
  }
}
