export class Categories {
    public categoryName;
    public isSelected;
    constructor(categoryName, isSelected = false) {
        this.categoryName = categoryName;
        this.isSelected = isSelected;
    }
  }

  export class Items {
    public itemName;
    public itemCount;
    constructor(itemName, itemCount = 0) {
        this.itemName = itemName;
        this.itemCount = itemCount;
    }
  }