import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../dto/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8080/amazon";
  

  constructor(private httpClient:HttpClient) { }
 
  getProductList(categoryId:number): Observable<Product[]>
  {
    console.log(categoryId);
    let url =`${this.baseUrl}/category/${categoryId}`;
    
    return this.httpClient.get<Product[]>(url);
    
    
  }

}
