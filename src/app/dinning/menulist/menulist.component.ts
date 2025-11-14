import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css'],
})
export class MenulistComponent implements OnInit {
  mealTypes: string[] = ["breakfast","lunch","dinner"];//meal categories
  groupedMenuItems:{[key:string]:any[]}={};//items grouped by type
  menuTypes:any[]=[];//all items from api
  imageUrl = 'https://5.imimg.com/data5/SELLER/Default/2022/11/WL/RG/VJ/32970822/217663441-916250415654071-1629050920220638229-n-1000x1000.jpg';

  constructor(private menuService: MenuService, private route: Router) {}
  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data: any) => {
      this.menuTypes = data;
   

    this.mealTypes.forEach((type)=>{
      this.groupedMenuItems[type]=this.menuTypes.filter((item)=>
        item.category.toLowerCase()==type.toLowerCase()
      )
       });
    })


  }
}
