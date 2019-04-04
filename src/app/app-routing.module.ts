import { CheckoutComponent } from './checkout/checkout.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './login/login.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {FormProductsComponent} from './admin/form-products/form-products.component'

const routers: Routes = [
    {path:'',component: ProductsComponent,canActivate:[AuthguardService]},
    { path:'products', component: ProductsComponent,canActivate:[AuthguardService]},
    { path:'orders', component: MyOrdersComponent,canActivate:[AuthguardService]},
    { path:'admin/orders' ,component: AdminOrdersComponent,canActivate:[AuthguardService,AdminAuthGuardService]},
    { path:'admin/products' ,component: AdminProductsComponent,canActivate:[AuthguardService,AdminAuthGuardService]},
    { path:'admin/products/new' ,component: FormProductsComponent,canActivate:[AuthguardService,AdminAuthGuardService]},
    { path:'admin/products/:id',component: FormProductsComponent,canActivate:[AuthguardService,AdminAuthGuardService]},
    {path: 'admin/user',component: AdminUserComponent,canActivate:[AuthguardService,AdminAuthGuardService]},
    { path:'shopping-card' ,component: ShoppingCardComponent},
    {path:'login',component: LoginComponent},
    {path:'checkout',component:CheckoutComponent},


];
@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}