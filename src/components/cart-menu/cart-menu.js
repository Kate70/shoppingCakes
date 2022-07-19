import React from "react";
import "./cart-menu.css";
import { calcTotalPrice } from "../../utils";
import { Button } from "../button";
import { CartItem } from "../cart-item";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__cake-list">
        {items.length > 0
          ? items.map((cake) => (
              <CartItem
               key={cake.title}
               id={cake.id}
               title={cake.title}
               price={cake.price} />
            ))
          : "Empty cart"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} $</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Create a
          </Button>
        </div>
      ) : null}
    </div>
  );
};
