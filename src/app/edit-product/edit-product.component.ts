import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;
  public url: string;

  constructor(private  router:Router,
              private activatedRoute: ActivatedRoute,
              private catalogueService: CatalogueService) { }

  ngOnInit() {
     this.url =atob(this.activatedRoute.snapshot.params.id);
    //his.url=urltoEdit;
   //console.log("iddddddddddddddd: "+urltoEdit);
    //console.log("iddddddddddddddd2: "+this.activatedRoute.snapshot.params.id);
    this.catalogueService.getRessource(this.url)
      .subscribe(data=>{
        this.currentProduct = data;
      }, error =>{
        console.log(error);
        }
      )
  }

  onBack(currentProduct: Product) {
    this.router.navigateByUrl("/products");
  }

 onUpdateProduct(value: any) {
 this.catalogueService.updateResourceService(this.url, value)
   .subscribe(data=>{
     this.currentProduct=data;
     console.log("updateeeeeeeeeeeeee"+this.currentProduct);
     alert("update  done ! it is ok ");
   }, error => {
     console.log("rrrrrrrrrrrrrrrrr"+error);
     })

  }
}
