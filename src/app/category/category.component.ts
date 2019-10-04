import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(c => this.categories = c);
  }

  onSelect(category?: Category) {
    if (category) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = null;
    }
  }

}
