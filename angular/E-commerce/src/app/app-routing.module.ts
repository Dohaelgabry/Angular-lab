import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{  path:"product",
  loadChilder:()=>import("./product/product.module").then(m=>m.ProductModule)},
  {
    path: "order",
    loadChilder: () => import("./order/order.module").then(m => m.OrderModule)
  },
  {
    path: "shared",
    loadChilder: () => import("./shared/shared.module").then(m => m.SharedModule)
  },
  {
    path: "acount",
    loadChilder: () => import("./account/account.module").then(m => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
