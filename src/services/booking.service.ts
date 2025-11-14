import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  url = "http://localhost:3000/api/bookings";
  constructor(private http: HttpClient) {}
  getAllbookings() {
    return this.http.get<Booking>(this.url);
  }
  getDataById(id: any) {
    return this.http.get<Booking>(`${this.url}/${id}`);
  }
 
putDataById(id:any,updateData:any){
  return this.http.put<Booking>(`${this.url}/${id}`,updateData)
}
addBooking(booking: any) {
    return this.http.post(this.url, booking);
  }


}
