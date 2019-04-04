import { AuthService } from './../services/auth.service';
import { Component, OnInit} from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { ShoppingCard } from '../model/shoppingCard';
import { Observable } from 'rxjs';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  card$: Observable<ShoppingCard>;
  constructor(private service : AuthService,private cardServ: ShoppingCardService){
    
  }
  
  logOut(){
    this.service.logOut();
  }
 async ngOnInit() {
   this.card$= await this.cardServ.getCard();
  }

}
