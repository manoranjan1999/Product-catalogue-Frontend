import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { RefreshComponentComponent } from './refresh-component/refresh-component.component';

const routes: Routes = [
  
  {path: "displayProduct", component: DisplayComponent},
  {path: "addProduct", component: AddproductComponent},
  {path: "searchProduct/:productName", component: SearchProductComponent},
  {path: "refreshComponent",component:RefreshComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
