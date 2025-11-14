import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  url = 'http://localhost:3000/api/meetings';
  constructor(private http: HttpClient) {}
  getAllmeetings() {
    return this.http.get(this.url);
  }
  getDataById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  patchDataById(id: any, updateData: any) {
    return this.http.patch(`${this.url}/${id}`, updateData);
  }
  addDataById(id: any, addData: any) {
    return this.http.post(`${this.url}/${id}`, addData);
  }

  deleteDataById(id: any, deleteData: any) {
    return this.http.delete(`${this.url}/${id}`, deleteData);
  }
}
