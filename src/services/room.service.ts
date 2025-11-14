import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prods';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private API_URL = `${environment.apiUrl}/api/rooms`;
  constructor(private http: HttpClient) {}
  getAllroom() {
    return this.http.get(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
 patchDataById(id: any,updateData: any) {
  return this.http.patch(`${this.API_URL}/${id}`,updateData);
}


}
