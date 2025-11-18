import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
// import { environment } from '../environments/environment.prod';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private API_URL = `${environment.apiUrl}/api/bookings`;
  constructor(private http: HttpClient) {}
  getAllbookings() {
    return this.http.get<Booking>(this.API_URL);
  }
  getDataById(id: any) {
    return this.http.get<Booking>(`${this.API_URL}/${id}`);
  }
 
putDataById(id:any,updateData:any){
  return this.http.put<Booking>(`${this.API_URL}/${id}`,updateData)
}
addBooking(booking: any) {
    return this.http.post(this.API_URL, booking);
  }


}
