import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Category} from "../categories";
import {products} from "../products";
import {AppModule} from "../app.module";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterLink,
    AppModule,
    NgIf,
    NgForOf,

  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  curCategory: Category | undefined;
  categoryList: Category[] = [
    { id: 0, name: "a", productList: products.filter(p=>p.category==="PC") },
    { id: 1, name: "b", productList: products.filter(p=>p.category==="Earphone") },
    { id: 2, name: "c", productList: products.filter(p=>p.category==="Laptop") },
    { id: 3, name: "d", productList: products.filter(p=>p.category==="Phones") },
    { id: 3, name: "f", productList: products.filter(p=>p.category==="PC component") },
  ];

  filteredCategories: Category[] = [];

  selectCategory(selected: Category) {
    this.curCategory = selected;
  }

  onSearchChange(event: Event) {
    if (event instanceof InputEvent) {
      const searchTerm = (event.target as HTMLInputElement).value;
      this.filteredCategories = this.categoryList.filter(category =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
