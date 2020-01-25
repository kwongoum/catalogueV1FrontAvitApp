import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
   public mode :number=1;
  public currentProduct: Product;

  constructor(private catalogueService:CatalogueService, private router:Router) { }

  ngOnInit() {
}

  public onAddProduct(form: any) {
    //console.log(value);
    this.catalogueService.saveResourceService("http://localhost:8080/products/",form)
      .subscribe(result=>{
        console.log(result);
       //this.router.navigateByUrl("/products");

             this.currentProduct = result;
             this.mode=2;
      }, error =>  {
        console.log(error);
      })

  }

  onAddAnotherProduct(value: any) {
    this.mode=1;

  }
}
