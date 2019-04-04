import { shoppingCardItems } from './shoppingCardItems';

export class ShoppingCard {
    shoppingcard: any;
    shoppingCard: any;
    constructor(private items:shoppingCardItems[]) {}
        

 get getTotalCount(){
      let counter = 0;
      for(let productId in this.items){
          counter += this.items[productId].quantity;
      }
      return counter;
  }
  get productid(){
      return Object.keys(this.items);
  }
  get totalItemsPrice() {
    let sum = 0;
    // tslint:disable-next-line:forin
    for (const productid in this.items ) {
      sum += this.items[productid].product.price 
      * this.items[productid].quantity;
    }
    return sum;
  }

  
}