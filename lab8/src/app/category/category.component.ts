import { Component } from '@angular/core';

import {Category} from "../categories";
import {Product, products} from "../products";



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  curCategory: Category | undefined;
  curProducts:Product[]=products
  categoryList: Category[] = [
    { id:7, name:"All",productList:this.curProducts},
    { id: 0, name: "PC", productList: this.curProducts.filter(p=>p.category==="PC") },
    { id: 1, name: "Earphone", productList: this.curProducts.filter(p=>p.category==="Earphone") },
    { id: 2, name: "Laptop", productList: this.curProducts.filter(p=>p.category==="Laptop") },
    { id: 3, name: "Phones", productList: this.curProducts.filter(p=>p.category==="Phone") },
    { id: 3, name: "PC component", productList: this.curProducts.filter(p=>p.category==="PC component") },
  ];

  filteredCategories: Category[] = this.categoryList;

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
