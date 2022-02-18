import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Categories } from './categories/categories';
import { CategoriesService } from './categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = "GeeksShop";
  
  categories: Categories[] = [];
  obj: any;
  buy_item: any;
  public constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getAll().subscribe(
      data => {
        this.categories = data;
        console.log('categories: ', this.categories);
      });
  }
  public getObj(params: any) {
    this.obj = params;
    console.log("get Item selected", params);
  }
  public getBuyItem(params: any) {
    this.buy_item = params;
    console.log("buy_item: ", params);
  }
}
