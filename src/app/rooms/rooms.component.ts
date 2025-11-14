import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  data: any[]= [];
  roomId: string | null = null;

  constructor(private router: Router, private roomService: RoomService,private route:ActivatedRoute) {}

  ngOnInit() {
    
    this.roomId = this.route.snapshot.paramMap.get('id');
    
      this.roomService.getAllroom().subscribe((response: any) => {
        this.data = response;
      });
    }

onClick() {
 
  this.router.navigate(['/login']);
}


  }

