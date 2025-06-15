import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../context/CartContext";
import { Margin, SpaceOut } from "../../styles/widgets";
import { Button } from "../../styles/widgets/Buttons";
import CartItem from "./CartItem";
import * as C from "./styles";
import { currencyToString } from "../../utils";

export default function Summary({ submit }) {
  const { cart } = useContext(CartContext);

  return (
    <Cover>
      <Header>SUMMARY</Header>
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} summary={true} />
      ))}
      <C.Bottom>
        <SpaceOut>
          <p className="light-text">Total</p>
          <p className="dark-text">
            ${" "}
            {cart.length !== 0
              ? currencyToString(
                  cart
                    .map((val) => val.product.price * val.amount)
                    .reduce((a, b) => a + b)
                )
              : 0}
          </p>
        </SpaceOut>
        <Margin m={8} />
        <SpaceOut>
          <p className="light-text">SHIPPING</p>
          <p className="dark-text">$ {cart.length !== 0 ? 50 : 0}</p>
        </SpaceOut>
        <Margin m={8} />
        <SpaceOut>
          <p className="light-text">VAT (INCLUDED)</p>
          <p className="dark-text">
            ${" "}
            {cart.length !== 0
              ? currencyToString(
                  0.2 *
                    cart
                      .map((val) => val.product.price * val.amount)
                      .reduce((a, b) => a + b)
                )
              : 0}
          </p>
        </SpaceOut>
        <Margin m={24} />
        <SpaceOut>
          <p className="light-text">GRAND TOTAL</p>
          <p className="dark-text active">
            ${" "}
            {cart.length !== 0
              ? currencyToString(
                  cart
                    .map((val) => val.product.price * val.amount)
                    .reduce((a, b) => a + b) +
                    50 +
                    0.2 *
                      cart
                        .map((val) => val.product.price * val.amount)
                        .reduce((a, b) => a + b)
                )
              : 0}
          </p>
        </SpaceOut>
      </C.Bottom>
      <Margin m={32} />
      <Button
        type="submit"
        color="orange"
        full
        disabled={cart.length === 0}
        onClick={() => submit()}
      >
        CONTINUE
      </Button>
    </Cover>
  );
}

const Cover = styled.div`
  width: 350px;
  min-width: 350px;
  padding: 32px;
  background: #fff;
  border-radius: 8px;

  @media (max-width: 960px) {
    width: 100%;
    min-width: 100%;
  }

  @media (max-width: 450px) {
    padding: 24px;
  }
`;

const Header = styled.h6`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1.29px;
  margin-bottom: 31px;
`;
