import React from 'react'
import { CakeItem } from '../../components/cake-item'
import { useSelector} from 'react-redux';
import { ItemsInCart } from '../../components/items-in-cart'
import { calcTotalPrice } from '../../utils';
import { OrderItem } from '../../order-item';
import "./order-page.css"

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  console.log(items);
  
  if(items.length < 1) {
    return <h1>Empty!</h1>
}
  return (
    <div className="order-page">

<div className="order-page__left">
  {items.map(cake => <OrderItem cake={cake}/>)}
</div>
<div className="order-page__right">
                <div className="order-page__total-price">
                    <span> Total: {calcTotalPrice(items)} $</span>
                </div>
            </div>
    </div>
  )
}
