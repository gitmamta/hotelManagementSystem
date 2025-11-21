import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rooms } from 'src/utils/data1';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent {

  roomsOccupied='15/30';
  data: any =rooms;
  constructor(private route: Router) {}

  checkInsToday=12;
  checkOutToday=6;
  OccupancyRateToday='75%';
  revenueToday='$4,0000';
  housekeepingPending='6 rooms';
  newBookingsToday='300';



}
