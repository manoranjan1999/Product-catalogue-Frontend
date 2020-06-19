import { Component } from '@angular/core';
import { CatalogueserviceService } from './catalogueservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'catalogue1';
  productName:String;
  
  constructor(private serviceapp : CatalogueserviceService, private router:Router)
  {}

  public sendDataToSearchComponent()
  {
    this.router.navigate(["/searchProduct",this.productName]);
  }
}
