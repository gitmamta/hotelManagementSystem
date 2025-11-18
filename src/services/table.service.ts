import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class tableService {
  private API_URL = `${environment.apiUrl}/api/tableBookings`;
  constructor(private http: HttpClient) {}
  getAllTable() {
    return this.http.get(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
addTable(tableData: any) {
  return this.http.post(this.API_URL,tableData);
}


}
