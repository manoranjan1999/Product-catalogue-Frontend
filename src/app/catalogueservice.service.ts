import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, Subject, from } from 'rxjs';
import { MyCatalogue } from './mycatalogue';
import { tap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CatalogueserviceService{
 
  private baseURL= "http://localhost:8080/";
  searchData:String;
  
  constructor(private http:HttpClient,private router:Router) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  public doSaveCatalogueData(catalogueObj)
  {
     return this.http.post(this.baseURL + "addProduct", catalogueObj,{responseType: 'text' as 'json'});
  }

  public displayAllProducts()
  {
    return this.http.get(this.baseURL + "displayProduct");
  }


  public uploadImage(formData:FormData)
  {
     return this.http.post(this.baseURL + "uploadImage", formData);
  }

  public getImages()
  {
    return this.http.get("http://localhost:8080/getAllImage"); 
  }

  public searchProductByName(productName):Observable<MyCatalogue[]>
  {
    return this.http.get<MyCatalogue[]>(this.baseURL + "searchProduct/" + productName);
    
  }

  public delProduct(index1:number)
  {
    this.http.delete(this.baseURL + "deleteProduct/" + index1).subscribe(
      data=>{
      }
    );
    
    
  }

}
