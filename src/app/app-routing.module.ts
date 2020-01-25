import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
  { path: "products",
    component: ProductsComponent
  },

  {
    path:"edit-product/:id",
    component: EditProductComponent
  },

  {path: "new-product",
    component: NewProductComponent
  },

  {
    path: "",
    redirectTo:"/products", pathMatch: "full"
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
