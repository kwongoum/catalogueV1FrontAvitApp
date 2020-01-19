import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsComponent} from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
public host: String = "http://localhost:8080";


  constructor( private httpClient: HttpClient) { }

   public getProductsService(p: number,s:number):Observable<any> {
    return this.httpClient.get(this.host+"/products? page="+p+"&size="+s);
  }

}



