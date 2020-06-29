import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Categories, Items } from '../category.model';
import { MatMenuTrigger } from '@angular/material/menu';
import * as _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() option: Categories;
  @Input() items: any;
  totalCount = 0;
  showTotal: boolean;
  cloneItems: any;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
    const selectedItem = [];
    this.items.forEach(value => {
      selectedItem.push(new Items(value))
    })
    this.items = selectedItem;
    console.log(this.items)
    
  }

  addValue(item) {
    this.items.map((it) => {
      if(it.itemName === item.itemName) {
        it.itemCount = it.itemCount + 1;
      }
      return it;
    });
  }

  subtractValue(item) {
    this.items.map((it) => {
      if(it.itemName === item.itemName) {
        it.itemCount = it.itemCount - 1;
      }
      return it;
    });
  }
  closeMenu(showResult) {
    if(showResult ) {
      this.totalCount = 0;
      this.items.forEach(element => {
        this.totalCount = this.totalCount + element.itemCount;
      });
    }
    this.showTotal = showResult;
    this.trigger.closeMenu();

  }
  checkState() {
    if(this.showTotal === false) {
      this.items = this.cloneItems;
    }
  }

  getValue() {
   this.cloneItems = _.cloneDeep(this.items);
  }
}
