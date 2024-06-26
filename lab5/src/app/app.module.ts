import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {RatingModule} from "ng-starrating";
import { ProductListComponent } from './product-list/product-list.component';
import {CartComponent} from "./cart/cart.component";
import {CategoryComponent} from "./category/category.component";
import {ProductItemComponent} from "./product-item/product-item.component";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: CategoryComponent},//ProductListComponent },
            {path: 'cart', component: CartComponent},]),

        RatingModule,
        CartComponent,
        ProductItemComponent,

    ],
    declarations: [AppComponent, TopBarComponent, ProductListComponent,CategoryComponent,],
    bootstrap: [AppComponent],
    exports: [
        ProductListComponent
    ]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
