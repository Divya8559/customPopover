import { Component, OnInit } from '@angular/core';
import { MockData } from './api';
import * as _ from 'lodash';
import { Categories } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'popover-app';
  mockData: any;
  categories:  Categories[];
  constructor(){
    this.categories = [];
  }
  ngOnInit(){
    this.mockData = MockData;
    const keysInMockData = _.keys(this.mockData.categories);
    keysInMockData.forEach(value => {
      this.categories.push(new Categories(value))
    })
   
  }
  selectCategory(category){
    this.categories = this.categories.map(cat => {
      if(cat.categoryName === category.categoryName){
        cat.isSelected = !category.isSelected;
      }
      return cat;
    })
  }
  getItems(name){
   return this.mockData.categories[name];
  }
}
