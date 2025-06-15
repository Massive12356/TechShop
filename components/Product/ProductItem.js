import React, { useState, useContext } from "react";
import * as P from "./styles";
import Image from "next/image";
import ToggleBtn from "../Cart/ToggleBtn";
import CartContext from "../../context/CartContext";
import { Button } from "../../styles/widgets/Buttons";
import { Flex } from "../../styles/widgets";
import { currencyToString } from "../../utils";
import Link from "next/link";

export default function ProductItem({ product, reverse, _addToCart, center }) {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    amount > 1 && setAmount(amount - 1);
  };

  return (
    <P.ProductItemCover reverse={reverse} image={product.image} center={center}>
      <div className="image">
        {/* <Image layout="fill" objectFit="cover" src={product.image.desktop} /> */}
      </div>

      <P.Content center={center}>
        {product.new && <P.Title>NEW PRODUCT</P.Title>}
        <P.Name>{product.name}</P.Name>
        <P.Text center={center}>{product.description}</P.Text>
        {!_addToCart ? (
          <Link href={`/product/${product.slug}`} passHref>
            <Button color="orange">SEE PRODUCT</Button>
          </Link>
        ) : (
          <>
            <P.Amount>$ {currencyToString(product.price)}</P.Amount>
            <Flex gap={16} style={{ flexWrap: "wrap" }}>
              <ToggleBtn
                amount={amount}
                increment={increment}
                decrement={decrement}
              />
              <Button color="orange" onClick={() => addToCart(product, amount)}>
                ADD TO CART
              </Button>
            </Flex>
          </>
        )}
      </P.Content>
    </P.ProductItemCover>
  );
}
