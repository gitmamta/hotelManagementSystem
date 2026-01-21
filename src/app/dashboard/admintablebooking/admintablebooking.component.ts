import { Component, OnInit } from '@angular/core';
import { tableService } from 'src/services/table.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admintablebooking',
  templateUrl: './admintablebooking.component.html',
  styleUrls: ['./admintablebooking.component.css']
})
export class AdmintablebookingComponent implements OnInit {
bookings: any[] = [];
constructor(private tableservice: tableService,private location:Location) {}

  
    ngOnInit() {
    this.tableservice.getAllTable().subscribe((data:any) => {
      this.bookings = data;
    });
  }
confirmTableBooking(booking: any) {
  if (booking.confirmed) return; // Already confirmed
  this.tableservice.updateBooking(booking._id,{ confirmed: true }).subscribe({
    next: (updatedBooking) => {
      booking.confirmed = true; // update the UI
      alert('Table confirmed!');
    },
    error: (err) => console.error('Error confirming table', err),
  });
}
goBack() {
    this.location.back();
  }


}
