import { ShoppingCardService } from './../services/shopping-card.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy,OnInit {
  products:any[]=[];
  filteredProducts: any[] = [];
  subscribtion: Subscription;
  cart: any;
  category = '';

  constructor(private prodServ: ProductsService,
    private cardServ: ShoppingCardService,
    private route: ActivatedRoute) { 
      this.subscribtion = this.prodServ.get().
      switchMap(
        products => {
          this.products = products;
          return this.route.queryParamMap;
        })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.payload.val().category === this.category) :
          this.products;
      });
  }

  async ngOnInit() {
   (await this.cardServ.getCard())
   .subscribe(cart => {this.cart = cart; 
  });
  }
  
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
