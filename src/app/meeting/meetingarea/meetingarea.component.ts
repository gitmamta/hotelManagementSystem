
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MeetingService } from 'src/services/meeting.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-meetingarea',
  templateUrl: './meetingarea.component.html',
  styleUrls: ['./meetingarea.component.css']
})
export class MeetingareaComponent implements OnInit {

  data: any[]= [];
  Id: string | null = null;

  constructor(private router: Router, private meetingService: MeetingService,private route:ActivatedRoute) {}

  ngOnInit() {
    
    this.Id = this.route.snapshot.paramMap.get('id');
    
      this.meetingService.getAllmeetings().subscribe((response: any) => {
        this.data = response;
      });
    }

onClick() {
 
  this.router.navigate(['/login']);
}


  }

