import { Component, OnInit } from '@angular/core';
import { CatalogueserviceService } from '../catalogueservice.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  deteteMessage:any;
  catalogueProducts:any;
  imageMaps:any=[];
  constructor(private serviceDatas:CatalogueserviceService, private router:Router)
  {}

  ngOnInit() 
  {
    let resp1 = this.serviceDatas.displayAllProducts();
    resp1.subscribe((data)=>
    {
      this.catalogueProducts = data;
    });
   
  //  console.log(this.catalogueProducts[0].index1);
    //fetch images from service and subscribe it
    this.serviceDatas.getImages().subscribe(
      (response)=>{this.imageMaps = response;
      }
      );
      
  }

  public deleteProduct(index1 : number) {

     this.serviceDatas.delProduct(index1);
  //   this.router.navigateByUrl('/refreshComponent', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['displayProduct']);
  // }); 
    window.location.reload(); 
  }
}