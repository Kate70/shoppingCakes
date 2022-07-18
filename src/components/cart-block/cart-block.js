import React from 'react'
import'./cart-block.css'
import { FaCartArrowDown} from "react-icons/fa";



export const CartBlock = () => {
  return (
    <div className='cart-block'><FaCartArrowDown size={25} className='cart-block__icon'></FaCartArrowDown>
    <span className='cart-block__total-price'>25 $</span>
    </div>
  )
}
