import React from "react";
import { Card, CardTitle } from "./styles";
import { Button2 } from "../../styles/widgets/Buttons";
import Image from "next/image";
import Link from "next/link";

export default function Card1({ img, title, route }) {
  return (
    <Card>
      <div className="mainImage">
        <Image unoptimized height={160} width={180} src={img} alt="cardImg" />
      </div>
      <CardTitle>{title}</CardTitle>
      <Link href={route}>
        <Button2>
          SHOP
          <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </Button2>
      </Link>
    </Card>
  );
}
