import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CatalogueserviceService } from './catalogueservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchProductComponent } from './search-product/search-product.component';
import { RefreshComponentComponent } from './refresh-component/refresh-component.component';

 
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddproductComponent,
    SearchProductComponent, 
    RefreshComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CatalogueserviceService,SearchProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
