import { ShoppingCardService } from './../services/shopping-card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
card$;
total$;
  constructor(private cardServ: ShoppingCardService) { }

  async ngOnInit() {
    this.card$ = await this.cardServ.getCard();
  }
  clearAll() {
    this.cardServ.clearAllCart();
  }
}
