import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prods';
@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  private API_URL = `${environment.apiUrl}/api/meetings`;
  constructor(private http: HttpClient) {}
  getAllmeetings() {
    return this.http.get(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  patchDataById(id: any, updateData: any) {
    return this.http.patch(`${this.API_URL}/${id}`, updateData);
  }
  addDataById(id: any, addData: any) {
    return this.http.post(`${this.API_URL}/${id}`, addData);
  }

  deleteDataById(id: any, deleteData: any) {
    return this.http.delete(`${this.API_URL}/${id}`, deleteData);
  }
}
