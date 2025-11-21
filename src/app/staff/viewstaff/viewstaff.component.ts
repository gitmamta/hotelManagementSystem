import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/services/staff.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.css'],
})
export class ViewstaffComponent implements OnInit {
  searchText: string = '';
  allStaff: any[] = [];       // full list from backend
  filteredStaff: any[] = [];  // table display
  staff: any = null;          // single staff card
  showSingle: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check route params for single staff
    this.route.params.subscribe((params: Params) => {
      const staffId = params['id'];
      if (staffId) {
        this.showSingle = true;
        this.staffService.getDataById(staffId).subscribe((data: any) => {
          this.staff = data;
        });
      } else {
        this.showSingle = false;
        this.loadAllStaff();
      }
    });
  }

  // Load all staff from backend
  loadAllStaff() {
    this.staffService.getAllStaff().subscribe((data: any) => {
      this.allStaff = data;
      this.filteredStaff = data; // initially show all
    });
  }

  // View single staff
  viewStaff(id: string) {
    this.staffService.getDataById(id).subscribe((data: any) => {
      this.staff = data;
      this.showSingle = true;
    });
  }

  // Back to table
  goBackToList() {
    this.router.navigate(['/viewstaff']);
    this.staff = null;
    this.showSingle = false;
    this.loadAllStaff(); // reload table
  }

  // Search staff by name or ID (backend)
  searchBackend() {
    const keyword = this.searchText.trim();

    if (!keyword) {
      this.filteredStaff = this.allStaff;
      return;
    }

    this.staffService.searchStaff(keyword).subscribe((data: any) => {
      this.filteredStaff = data;
      this.showSingle = false;
      this.staff = null;
    });
  }
}
