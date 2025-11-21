import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private API_URL = `${environment.apiUrl}/api/staffs`;
  constructor(private http: HttpClient) {}
  getAllStaff() {
    return this.http.get(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addStaff(staffData: any) {
    return this.http.post(this.API_URL, staffData);
  }
  patchStaff(id: number, staffData: any) {
    return this.http.patch(`${this.API_URL}/${id}`, staffData);
  }
  searchStaff(keyword: string) {
  return this.http.get(`${this.API_URL}${keyword}`);
}

}
