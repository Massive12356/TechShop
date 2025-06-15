import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import ToggleBtn from "./ToggleBtn";
import CartContext from "../../context/CartContext";
import { Flex } from "../../styles/widgets";
import { currencyToString } from "../../utils";

export default function CartItem({
  item: {
    product: { cartName, price, image, id },
    amount,
  },
  summary,
  small,
}) {
  const { increment, decrement } = useContext(CartContext);

  return (
    <Cover>
      <Flex gap={16}>
        <Image
          src={image.mobile}
          width={!small ? 64 : 50}
          height={!small ? 64 : 50}
          alt="product"
        />
        <div>
          <Text>{cartName}</Text>
          <Text2>$ {currencyToString(price)}</Text2>
        </div>
      </Flex>
      {!summary ? (
        <ToggleBtn
          small
          amount={amount}
          increment={() => increment(id)}
          decrement={() => decrement(id)}
        />
      ) : (
        <Text2>X{amount}</Text2>
      )}
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
`;

export const Text2 = styled.p`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.5;
`;
