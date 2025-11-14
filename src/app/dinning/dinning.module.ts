import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinningRoutingModule } from './dinning-routing.module';
import { MenulistComponent } from './menulist/menulist.component';
import { HttpClientModule } from '@angular/common/http';
import { TablebookingComponent } from './tablebooking/tablebooking.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenulistComponent,
    TablebookingComponent
  ],
  imports: [
    CommonModule,
    DinningRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    MenulistComponent
  ],
})
export class DinningModule { }
