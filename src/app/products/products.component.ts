import { Component, OnInit } from '@angular/core';

import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public listproducts:any;
  public size: number = 5;
  public currentPage: number=0;
  public totalPages :  number;
  public totalpagesArray:Array<number>;
  constructor(  private catalogueService:CatalogueService ) { }

  ngOnInit() {
  }



   public  onClickGetProduct(){
    this.catalogueService.getProductsService(this.currentPage,this.size)
     .subscribe(data=>{
       this.listproducts=data;
        this.totalPages=data["page"].totalPages;
        this.totalpagesArray = new Array<number>(this.totalPages);

        }, err =>{
        console.log(err);
        })
  }


  onPageProducts(i: number) {
    this.currentPage =i;
    this.onClickGetProduct();
  }
}
