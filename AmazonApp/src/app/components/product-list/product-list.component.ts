import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/dto/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
currentCategoryId:number=1;
  constructor(private productService:ProductService,private Route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Route.paramMap.subscribe(()=>

    this.getProductList()
    );
  }
   products:Product[]=[];

   getProductList(){

    const hasCategoryId:boolean=this.Route.snapshot.paramMap.has('id');
    if(hasCategoryId)
    {
      console.log("Hi everyone");
      this.currentCategoryId=+this.Route.snapshot.paramMap.get('id')!;
      
    }
    else{
      console.log("Hello");
      this.currentCategoryId=1;
    }
     this.productService
     .getProductList(this.currentCategoryId).
     subscribe(data=>{
      this.products=data
    });
    console.log(this.products);
   }
   
}
