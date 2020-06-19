import { Component, OnInit } from '@angular/core';
import { CatalogueserviceService } from '../catalogueservice.service';
import { MyCatalogue } from '../mycatalogue';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  
  catalogueProduct:any[];
  public imageMaps:any=[];
 
  errorMessage:any;
  private route$: Subscription;
  productName2: String;

  constructor(private router : ActivatedRoute,private router1:Router, private searchService : CatalogueserviceService) { 
  }

  ngOnInit() {
    this.route$ = this.router.params.subscribe(
      (params: Params) => {
          this.productName2 = params['productName']; 
          this.searchService.searchProductByName(this.productName2).subscribe(
            (data)=>{
              this.catalogueProduct=data;
              
            }
          );
          this.searchService.getImages().subscribe(
            (data)=>{
              this.imageMaps = data;
              
          }
          );
          //window.location.reload();
      }
      
  );
  }
  // public deleteProduct(index1 : number) {
  //   let resp = this.searchService.delProduct(index1);
  //   //this.router.navigateByUrl("/displayProduct");
  //   this.router1.navigateByUrl('/refreshComponent', { skipLocationChange: true }).then(() => {
  //   this.router1.navigate(['/searchProduct',this.productName2]);
  // }); 
  // }
    
}
