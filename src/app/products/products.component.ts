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
  public size: number = 5;
  public currentPage: number=0;
  public totalPages :  number;
  public totalpagesArray:Array<number>;
  constructor(  private catalogueService:CatalogueService ) { }

  ngOnInit() {
  }

   public  onClickGetProduct( ) {

   this.catalogueService.getProductsService(this.currentPage,this.size)
     .subscribe(data=>{

        this.totalPages=data["page"].totalPages;
        this.totalpagesArray = new Array<number>(this.totalPages);
       this.listproducts=data;
        }, err =>{
        console.log(err);
        })
  }
}
