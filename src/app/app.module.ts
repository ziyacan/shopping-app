import { LoggedComponent } from './account/logged/logged.component';
import { VatAddedPipe } from './product/vat-added.pipe';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartService } from './cart/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductService } from './product/product.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './account/login.guard';
import { PendingChangesGuard } from './guards/pending-changes.guard';

const routes: Routes = [
   { path: '', redirectTo: 'products', pathMatch: 'full' },
   { path: 'products', component: ProductComponent },
   { path: 'products/:seoUrl', component: ProductComponent },
   { path: 'my-cart', component: CartComponent },
   { path: 'shipping-detail', component: ShippingDetailComponent, canActivate: [LoginGuard], canDeactivate: [PendingChangesGuard] }, //Shipping detail sayfasına gitmek için ilk önce LoginGuard true olması gerekiyor.
   { path: 'account', component: AccountComponent },
];

@NgModule({
   declarations: [
      AppComponent,
      AccountComponent,
      CartComponent,
      ProductComponent,
      ShippingDetailComponent,
      CategoryComponent,
      NotFoundComponent,
      CartSummaryComponent,
      VatAddedPipe,
      ProductFilterPipe,
      LoggedComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      BrowserAnimationsModule,
      SimpleNotificationsModule.forRoot(),
      RouterModule.forRoot(routes),
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [LoggedComponent],
   providers: [
      ProductService,
      { provide: 'apiUrl', useValue: 'http://newnorthwindapi.azurewebsites.net/api' },
      NotificationsService,
      CartService,
      LoginGuard,
      PendingChangesGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
