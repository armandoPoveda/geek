import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Categories } from '../categories/categories';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  categories: Categories[] = [];
  @Input() item: any;
  @Output()
  selectedCategory = new EventEmitter<Object>();
 
  title = "GeeksShop";

  public constructor() { }

  public selectCategory(params: any) {
    console.log("selectCategory: ", params);
    this.selectedCategory.emit(params.products);
  }

  ngOnInit(): void {

  }
}
