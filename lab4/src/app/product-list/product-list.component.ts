import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  share() {
    window.alert('The product has been shared!');
  }
  shareOnWhatsApp(product: Product) {
    const productName = encodeURIComponent(product.name);
    const productLink = encodeURIComponent(product.url_product);

    const whatsappUrl = `https://wa.me/?text=${productName}%20-%20${productLink}`;
    window.open(whatsappUrl, '_blank');
  }

  // Method to share on Telegram
  shareOnTelegram(product: Product) {
    const productName = encodeURIComponent(product.name);
    const productLink = encodeURIComponent(product.url_product);

    const telegramUrl = `https://t.me/share/url?url=${productLink}&text=${productName}`;
    window.open(telegramUrl, '_blank');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
