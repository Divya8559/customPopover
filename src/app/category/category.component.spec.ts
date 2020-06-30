import { TestBed } from '@angular/core/testing';
import { Items } from '../category.model';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryComponent
      ]
    });
    component = TestBed.inject(CategoryComponent);
  });
  describe('checkState', () => {
    it('should cloneItems equal item', () => {
      component.showTotal = false;
      component.items = [new Items('test', 0)];
      component.checkState();
      expect(component.cloneItems).toEqual(component.items);
    });
  });
  describe('ngOnInit', () => {
    it('should assign selected item', () => {
      component.items = ['tomato', 'cucumber', 'lettuce', 'carrot'];
      expect(component.items).toContain('tomato');
    });
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
