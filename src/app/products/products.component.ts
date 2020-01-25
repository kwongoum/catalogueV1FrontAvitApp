import { Component, OnInit } from '@angular/core';

import {CatalogueService} from '../services/catalogue.service';

import {Product} from '../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';



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
  public currentkeyWord: string;
  public form: any;
  public modee: number=1;
  public currentProduct: Product;

  constructor(  private catalogueService:CatalogueService , private router:Router
                , private activatedRoute: ActivatedRoute) { }

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
   //this.currentProduct=p;
   // let url1:string = "/edit-product/"+btoa(p.id);

    let url:string = p._links.self.href;
   // let url4:string = "/edit-product/"+p.id;
    this.router.navigateByUrl("/edit-product/"+btoa(url));

  }

  onUpdateProduct(p: Product){
    this.currentProduct=p;
  this.catalogueService.updateResourceService(this.currentProduct,this.currentProduct.id)
    .subscribe(res=>{
        console.log(res);
       this.currentProduct=res;
          this.modee=1;
        this.router.navigateByUrl("/products/"+p.id);
    }, err=>{
        console.log(err);
    }
  )
  }


  onBack(currentProduct: Product) {
    this.modee=1;
  }
}
