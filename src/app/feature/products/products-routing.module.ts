import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonGuard } from '../auth/gaurd/common.guard';
import { AllProductlistComponent } from './components/all-productlist/all-productlist.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
