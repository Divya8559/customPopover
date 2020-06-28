import { Component, OnInit, Input} from '@angular/core';
import { Categories, Items } from '../category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() option: Categories;
  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
    const selectedItem = [];
    this.items.forEach(value => {
      selectedItem.push(new Items(value))
    })
    this.items = selectedItem;
    console.log(this.items)
  }

}
