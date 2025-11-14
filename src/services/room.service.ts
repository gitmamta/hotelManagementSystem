import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  url = "http://localhost:3000/api/rooms";
  constructor(private http: HttpClient) {}
  getAllroom() {
    return this.http.get(this.url);
  }
  getDataById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
 patchDataById(id: any,updateData: any) {
  return this.http.patch(`${this.url}/${id}`,updateData);
}


}
