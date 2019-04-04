import { Component, Input } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private cardServ: ShoppingCardService) { }
@Input('product') product:any=[];
@Input('shoppingcard') shoppingcard;


  addToCard(){
    this.cardServ.addToCard(this.product);
  }
  removeFromCard(){
    this.cardServ.removeFromCard(this.product);
  }
  getQuantity(){
    if(!this.shoppingcard){
      return 0;
    }
    else {
      let item = this.shoppingcard.items[this.product.key];
      return item ? item.quantity : 0;
    }
  }
}
