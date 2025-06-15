import React, { useContext, useState } from "react";
import styled from "styled-components";
import * as R from "./styles";
import CartContext from "../../context/CartContext";
import SimpleBar from "simplebar-react";
import CartItem from "../Cart/CartItem";

export default function Reciept({ showLess, setShowLess }) {
  const { cart } = useContext(CartContext);
  const [_cart, setCart] = useState(cart);

  return (
    <R.RecieptCover>
      <R.RecieptLeft>
        <SimpleBar style={{ height: "fit-content", maxHeight: "210px" }}>
          {!showLess
            ? _cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  summary={true}
                  small={true}
                />
              ))
            : _cart.length !== 0 && (
                <CartItem item={_cart[0]} summary={true} small={true} />
              )}
        </SimpleBar>

        {_cart.length > 1 && (
          <>
            <HR />
            <Btn onClick={() => setShowLess(!showLess)}>
              {!showLess
                ? "View less"
                : `and ${_cart.length - 1} other item(s)`}
            </Btn>
          </>
        )}
      </R.RecieptLeft>
      <R.RecieptRight>
        <p className="text1">GRAND TOTAL</p>
        <p className="text2">$5,000</p>
      </R.RecieptRight>
    </R.RecieptCover>
  );
}

const HR = styled.hr`
  opacity: 0.1;
`;

const Btn = styled.button`
  background: transparent;
  border: none;
  font-weight: 700;
  opacity: 0.5;
  margin: 10px 0;
  width: 100%;
  cursor: pointer;
`;
