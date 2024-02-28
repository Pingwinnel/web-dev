import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Category} from "../categories";
import {products} from "../products";
import {AppModule} from "../app.module";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  curCategory: Category | undefined;
  categoryList: Category[] = [
    { id:7, name:"All",productList:products},
    { id: 0, name: "PC", productList: products.filter(p=>p.category==="PC") },
    { id: 1, name: "Earphone", productList: products.filter(p=>p.category==="Earphone") },
    { id: 2, name: "Laptop", productList: products.filter(p=>p.category==="Laptop") },
    { id: 3, name: "Phones", productList: products.filter(p=>p.category==="Phone") },
    { id: 3, name: "PC component", productList: products.filter(p=>p.category==="PC component") },
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

  protected readonly products = products;
}
