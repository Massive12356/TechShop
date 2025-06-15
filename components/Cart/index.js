import React, { useContext } from "react";
import { Margin, SpaceOut } from "../../styles/widgets";
import { Button } from "../../styles/widgets/Buttons";
import CartContext from "../../context/CartContext";
import * as C from "./styles";
import SimpleBar from "simplebar-react";
import CartItem from "./CartItem";
import Link from "next/link";

export default function Cart({ setShowCart }) {
  const { cart, removeAll } = useContext(CartContext);

  return (
    <>
      <C.Overlay onClick={() => setShowCart(false)} />
      <C.Cover>
        <SpaceOut>
          <C.Text>Cart ({cart.length})</C.Text>
          <C.Button onClick={() => removeAll()}>Remove all</C.Button>
        </SpaceOut>
        {cart.length > 0 ? (
          <>
            <C.CartItems>
              <SimpleBar style={{ maxHeight: 240 }}>
                {cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </SimpleBar>
            </C.CartItems>
            <C.Bottom>
              <SpaceOut>
                <p className="light-text">Total</p>
                <p className="dark-text">
                  ${" "}
                  {cart.length !== 0
                    ? cart
                        .map((val) => val.product.price * val.amount)
                        .reduce((a, b) => a + b)
                    : 0}
                </p>
              </SpaceOut>
              <Margin m={24} />
              <Link href="/checkout" passHref>
                <Button color="orange" full>
                  Checkout
                </Button>
              </Link>
            </C.Bottom>
          </>
        ) : (
          <p className="empty light-text">Your cart is empty</p>
        )}
      </C.Cover>
    </>
  );
}
