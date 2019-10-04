import { CART_ITEM_LIST } from './cart-item-list';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItems: CartItem[];
constructor() { }

addToCart(product:Product):void{
  const addedItem = CART_ITEM_LIST.find(p => p.product.productId === product.productId);
  if(addedItem){
    addedItem.quantity += 1;
  } else {
    const cartItem = new CartItem();
    cartItem.product = product;
    cartItem.quantity = 1;
    CART_ITEM_LIST.push(cartItem);
  }
}


list():CartItem[]{
  return CART_ITEM_LIST;
}

clear() {
  CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
}

removeFromCart(product: Product){
  const addedItem = CART_ITEM_LIST.find(p => p.product.productId === product.productId);
  const indexNo = CART_ITEM_LIST.indexOf(addedItem);
  if(indexNo !== -1) {
    CART_ITEM_LIST.splice(indexNo,1);
  }
}

}
