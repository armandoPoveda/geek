import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from '../categories/categories';
import { CategoriesService } from '../categories/categories.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() selectedItem: any;
  @Output()
  buy_item = new EventEmitter<Object>();
  listBuyItems: any = []
  constructor(private categoriesService: CategoriesService) {
    // this.products = this.selectedItem.products;
    // console.log(this.products)
  }

  ngOnInit(): void {

  }

  public sendProductCart(item: any) {
    // console.log(item)
    this.listBuyItems.push(item);
    console.log("list Items: ", this.listBuyItems);
    this.buy_item.emit(this.listBuyItems);
  }
}
