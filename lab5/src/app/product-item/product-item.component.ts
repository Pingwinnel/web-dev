import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';
import {RatingModule} from "ng-starrating";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  imports: [
    RatingModule,
    NgForOf,
    NgForOf
  ],
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;

  constructor(private productListComponent: ProductListComponent) {}

  likes: number = 0;

  shareOnWhatsApp(product: Product) {
    const productName = encodeURIComponent(product.name);
    const productLink = encodeURIComponent(product.url_product);

    const whatsappUrl = `https://wa.me/?text=${productName}%20-%20${productLink}`;
    window.open(whatsappUrl, '_blank');
  }


  shareOnTelegram(product: Product) {
    const productName = encodeURIComponent(product.name);
    const productLink = encodeURIComponent(product.url_product);

    const telegramUrl = `https://t.me/share/url?url=${productLink}&text=${productName}`;
    window.open(telegramUrl, '_blank');
  }


  like() {
    this.likes++;
    this.product.likes = this.likes;
  }

  remove() {
    this.productListComponent.removeProduct(this.product);
    this.product = null;
  }
}