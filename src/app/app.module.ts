import { ProductsService } from './services/products.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthguardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import {AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { FormProductsComponent } from './admin/form-products/form-products.component';
import { CategoriesService } from './services/categories.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from '../environments/environment';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCardComponent,
    LoginComponent,
    AdminUserComponent,
    FormProductsComponent,
    ProductCardComponent,
    ProductFilterComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,


  ],
  providers: [AuthService,AuthguardService,UserService,AdminAuthGuardService,CategoriesService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
