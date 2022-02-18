import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    this.categoriesService.getAll().subscribe(
      data => {
        this.categories = data;
        console.log('categories: ', this.categories);
      })

  }

}
