import React, { useState } from 'react'
import'./cart-block.css'
import { FaCartArrowDown} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu';
import { calcTotalPrice } from '../../utils';
import { ItemsInCart } from '../items-in-cart';

export const CartBlock = () => {
  const [isMenu, setIsMenu] = useState(false)
  const items = useSelector(state=> state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items)
  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length}/>
      <FaCartArrowDown size={25} className='cart-block__icon'
    onClick={()=>setIsMenu(!isMenu)}
    ></FaCartArrowDown>
    {totalPrice > 0? <span className='cart-block__total-price'>{totalPrice} $</span>: null}
   {isMenu && <CartMenu items={items} onClick={()=>null}/>} 
    </div>
  )
}
