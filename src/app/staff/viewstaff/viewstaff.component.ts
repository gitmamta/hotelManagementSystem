import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/services/staff.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.css'],
})
export class ViewstaffComponent implements OnInit {
  allStaff: any[] = [];
  staff: any = null;//for single staff
  showSingle: boolean = false;//for conditionally for single staff and allstaff

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const staffId = params['id'];
      if (staffId) {
        this.showSingle = true;
        this.staffService.getDataById(staffId).subscribe((data: any) => {
          this.staff = data;
        });
      } else {
        this.showSingle = false;
        this.staffService.getAllStaff().subscribe((data: any) => {
          this.allStaff = data;
        });
      }
    });
  }
  viewStaff(id: number) {
    this.staffService.getDataById(id).subscribe((data: any) => {
      this.staff = data;
      this.showSingle = true;
      //  console.log('Clicked ID:', id);
    });
  }
  goBackToList() {
    this.staff = null; // ✅ Hide individual staff view
    this.showSingle = false;
  }
}
