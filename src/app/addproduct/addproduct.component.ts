import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { CatalogueserviceService } from '../catalogueservice.service';
import { from } from 'rxjs';
import { MyCatalogue } from '../mycatalogue';
import { Router, RouterModule } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public imagePath;
  imgURL: any;
  cardImageBase64: string;
  message:any;
  message1:any;
  catalogueProduct:any;
  imagename:any;

  catalogueObj:MyCatalogue = new MyCatalogue();

  catalogueForm = new FormGroup({
    productName : new FormControl('', Validators.required),
    productPrice : new FormControl('', Validators.required),
    modelNo : new FormControl('', Validators.required),
    genericName : new FormControl('', Validators.required),
    countryOfOrigin : new FormControl('', Validators.required),
  });

  constructor( private serviceData:CatalogueserviceService, private router:Router, private route: RouterModule) {
    
  }  
  

  ngOnInit() {
  }

  public saveData()
  {
    this.catalogueObj.imageName=this.imagename;
    //console.log(this.catalogueObj);
    
    let resp = this.serviceData.doSaveCatalogueData(this.catalogueObj);
    resp.subscribe((data)=>{    
       this.message = data;
       this.goToList();
      }); 
  }

  preview(files)
  { 
    const formData : FormData= new FormData();
    if (files.length == 0)
      return;
    var reader = new FileReader();
    this.imagePath = files[0];
    formData.append('imageData', this.imagePath,this.imagePath.name);
    this.imagename=files[0].name;
    
    //here we call the uploadImage() of service class
    console.log("before image uploaded..-----------");
    this.serviceData.uploadImage(formData).subscribe(
      (data)=>{
        console.log("image uploaded..-----------");
      } 
      );
    reader.readAsDataURL(files[0]); 
    reader.onload = (e:any) =>
    { 
      this.imgURL = reader.result; 
      const imgBase64Path = e.target.result;
      this.cardImageBase64 = imgBase64Path;
      //console.log(this.cardImageBase64);
      //this.serviceData.setData(this.cardImageBase64);  
    }
  }

  goToList(){
    this.router.navigate(['/displayProduct']);
  }
}
