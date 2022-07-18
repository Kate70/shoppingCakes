import React from 'react'
import { Button } from '../button'
import './cake-buy.css'


export const CakeBuy = ({cake}) => {
  return (
    <div className='cake-buy'>
        <span className='cake-buy__price'>{cake.price} $</span>
        <Button
        type='primary'
        onClick={()=>null}
        >Add to cart</Button>
    </div>
  )
}
