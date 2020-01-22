import { Component, OnInit } from '@angular/core';

import {CatalogueService} from '../services/catalogue.service';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';


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
  private currentkeyWord: string;
  private form: any;
  constructor(  private catalogueService:CatalogueService ) { }

  ngOnInit() {
  }



   public  onGetProduct(){
    this.catalogueService.getProductsService(this.currentPage,this.size)
     .subscribe(data=>{
       this.listproducts=data;
        this.totalPages=data["page"].totalPages;
        this.totalpagesArray = new Array<number>(this.totalPages);

        }, err =>{
        console.log(err);
        })
  }




  public  GetProductbyKeyWord( keyWord: string){

    this.catalogueService. getProductByKeywordService( keyWord, this.currentPage,this.size)
      .subscribe(data=>{
        this.listproducts=data;
        this.totalPages=data["page"].totalPages;
        this.totalpagesArray = new Array<number>(this.totalPages);

      }, err =>{
        console.log(err);
      })
  }


  onSearch(form: any) {
//console.log(value.name_input_search);
    this.form=form;
    this.currentPage=0;
this.currentkeyWord=form.name_input_search;
this.GetProductbyKeyWord(this.currentkeyWord);
  }
  onPageProducts(j: number) {
    this.currentPage =j;
    this.GetProductbyKeyWord(this.currentkeyWord);
  }

  onDeleteProduct(p) {
    this.catalogueService.deleteProductService(p._links.self.href)
      .subscribe(data=>{
         this.onSearch(this.form);

      }, err =>{
        console.log(err);
      })
  }

  onEditProduct(p: any) {

  }
}
