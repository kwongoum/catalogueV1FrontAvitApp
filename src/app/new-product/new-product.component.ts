import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private catalogueService:CatalogueService, private router:Router) { }

  ngOnInit() {
  }

  onAddProduct(data: any) {
    //console.log(value);
    this.catalogueService.saveRessourceService("http://localhost:8080/products/",data)
      .subscribe(result=>{
        console.log(result);
        this.router.navigateByUrl("/products");

      }, error =>  {
        console.log(error);
      })

  }
}
