import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsComponent} from '../products/products.component';
import {catchError} from 'rxjs/operators';
import {getIifeBody} from '@angular/compiler-cli/ngcc/src/host/esm5_host';

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

  public saveRessourceService(url: string , data:any){
    return  this.httpClient.post(url, data);

  }
}



