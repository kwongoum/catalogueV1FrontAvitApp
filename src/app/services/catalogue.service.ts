import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {ProductsComponent} from '../products/products.component';
import {catchError} from 'rxjs/operators';
import {getIifeBody} from '@angular/compiler-cli/ngcc/src/host/esm5_host';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
public host: String = "http://localhost:8080";



  constructor( private httpClient: HttpClient) { }

   public getProductsService(p: number,s:number):Observable<any> {
    return this.httpClient.get(this.host+"/products?page="+p+"&size="+s);
  }

  public getProductByKeywordService(keyWord: string, p: number,s:number):Observable<any> {
    return this.httpClient.get(this.host+"/products/search//byDescriptionPage?keyWord="+keyWord+"&page="+p+"&size="+s);
  }

  public deleteProductService(url){
    return this.httpClient.delete<void>(url);
  }


  public saveResourceService(url , data):Observable<Product>{
    return  this.httpClient.post<Product>(url, data);

  }



  updateResourceService(url, data):Observable<Product> {
    return this.httpClient.put<Product>(url, data);
}

getRessource(url):Observable<Product> {

  return  this.httpClient.get<Product>(url);
   }
}



