import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenulistComponent } from './menulist/menulist.component';
import { TablebookingComponent } from './tablebooking/tablebooking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenulistComponent,
  },
  {
    path: 'menu/:id',
    component: MenulistComponent,
  },
  {
    path: 'table',
    component: TablebookingComponent,
  },
  {
    path: 'table/:id',
    component: TablebookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinningRoutingModule {}
