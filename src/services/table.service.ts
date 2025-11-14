import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class tableService {
  url = "http://localhost:3000/tableBookings";
  constructor(private http: HttpClient) {}
  getAllTable() {
    return this.http.get(this.url);
  }
  getDataById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
addTable(tableData: any) {
  return this.http.post(this.url,tableData);
}


}
