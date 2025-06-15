import React from "react";
import * as C from "./styles";
import Image from "next/image";
import Link from "next/link";
import { Margin } from "../../styles/widgets";
import { Button } from "../../styles/widgets/Buttons";

export default function Card2({ product: { name, slug, image } }) {
  return (
    <C.Card2Cover>
      <Image
        unoptimized
        height={318}
        width={350}
        src={image.desktop}
        alt="cardImg"
      />
      <Margin m={20} />
      <C.Card2Title>{name}</C.Card2Title>
      <Link href={`/product/${slug}`}>
        <Button color="orange">SEE PRODUCT</Button>
      </Link>
    </C.Card2Cover>
  );
}
