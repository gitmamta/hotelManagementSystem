import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import{TableBooking} from '../app/models/table.model';
@Injectable({
  providedIn: 'root',
})
export class tableService {
  private API_URL = `${environment.apiUrl}/api/tableBookings`;
  constructor(private http: HttpClient) {}
  getAllTable() {
    return this.http.get<TableBooking[]>(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get<TableBooking>(`${this.API_URL}/${id}`);
  }
addTable(tableData: any) {
  return this.http.post<TableBooking>(this.API_URL,tableData);
}
updateBooking(id: string, data: any) {
    return this.http.patch<TableBooking>(`${this.API_URL}/${id}`, data);
  }

}
