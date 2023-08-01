import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
