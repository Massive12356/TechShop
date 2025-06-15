import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../../styles/widgets/Buttons";
import Reciept from "./Reciept";
import * as D from "./styles";

export default function Done() {
  const [showLess, setShowLess] = React.useState(true);

  return (
    <>
      <D.Overlay />
      <D.DoneCover>
        <img src="/assets/shared/desktop/icon-check.svg" alt="" />
        <D.Header>THANK YOU FOR YOUR ORDER</D.Header>
        <D.Text>You will receive an email confirmation shortly.</D.Text>
        <Reciept showLess={showLess} setShowLess={setShowLess} />
        <Link href="/" passHref>
          <Button color="orange" full>
            BACK TO HOME
          </Button>
        </Link>
      </D.DoneCover>
    </>
  );
}
