import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ShoppingCard } from '../model/shoppingCard';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
  constructor(private db:AngularFireDatabase) {
    
   }

  private create(){
    return this.db.list('/shopping-cards').push({
      dateCreated: new Date().getTime()
    });
  }
  public async getCard(): Promise<Observable<ShoppingCard>>{
    let cardId = await this.getOrCreateCardId();
    return this.db.object('/shopping-cards/' + cardId).valueChanges().map(card => new ShoppingCard((card as any).items));
  }
  private async getOrCreateCardId(){
    let cardId = localStorage.getItem('cardId');
    if(cardId)
      return cardId;
      let result = await this.create();
      localStorage.setItem('cardId',result.key);
      return result.key;
  }
  getItem(cardId:string,productId:string){
    return this.db.object('/shopping-cards/' + cardId + '/items/' + productId);

  }
  addToCard(product){
    this.updateToCard(product , 1);
  }
  removeFromCard(product){
    this.updateToCard(product, -1);
  }
  async clearAllCart() {
    let cartId = await this.getOrCreateCardId();
    return this.db.object('/shopping-cards/' + cartId).remove();
  }
  private async updateToCard(product, change: number) {
    const cartId = await this.getOrCreateCardId();
    const item$ = this.getItem(cartId, product.key);

    item$.snapshotChanges().take(1).subscribe((item: any) => {
      if (item.payload.exists()) {
        item$.update({ quantity: item.payload.val().quantity + change });
      } else {
        item$.update({
          product: {
            /* ORproduct : product.payload.val() */
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl,

          }, quantity: 1
        });
      }
    });

  }
  }
