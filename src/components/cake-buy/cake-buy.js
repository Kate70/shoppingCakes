import React from 'react'
import { Button } from '../button'
import { useDispatch, useSelector } from 'react-redux'
import './cake-buy.css'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'


export const CakeBuy = ({cake}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === cake.id)
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart){
      dispatch(deleteItemFromCart(cake.id))
    } else {
      dispatch(setItemInCart(cake))
    }
    
  }
  return (
    <div className='cake-buy'>
        <span className='cake-buy__price'>{cake.price} $</span>
        <Button
        type={isItemInCart? "secondary":'primary'}
        onClick={handleClick}
        >{isItemInCart ? "Delete fron cart": "Add to cart"}</Button>
    </div>
  )
}
