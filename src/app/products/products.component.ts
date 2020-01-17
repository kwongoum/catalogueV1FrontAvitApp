import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   public listproducts:any;

  constructor(  private catalogueService:CatalogueService ) { }

  ngOnInit() {
  }

   public  onClickGetProduct( ) {

   this.catalogueService.getProductsService()
     .subscribe(data=>{
        this.listproducts=data;
        }, err =>{
        console.log(err);
        })
  }
}
