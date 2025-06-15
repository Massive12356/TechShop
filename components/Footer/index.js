import React from "react";
import * as F from "./styles";
import { Container } from "../../styles/widgets";
import Link from "next/link";
import FB from "../../public/assets/shared/desktop/icon-facebook.svg";
import TW from "../../public/assets/shared/desktop/icon-twitter.svg";
import INSTA from "../../public/assets/shared/desktop/icon-instagram.svg";

export default function index() {
  return (
    <F.Cover>
      <Container style={{ position: "relative" }}>
        <F.Top>
          <img src="/assets/shared/desktop/logo.svg" alt="" />
          <nav id="footer-nav" aria-label="footer-navigation">
            <Link href="/" passHref>
              HOME
            </Link>
            <Link href="/headphones" passHref>
              HEADPHONES
            </Link>
            <Link href="/speakers" passHref>
              SPEAKERS
            </Link>
            <Link href="/earphones" passHref>
              EARPHONES
            </Link>
          </nav>
        </F.Top>
        <F.Text mb>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </F.Text>
        <F.Bottom>
          <F.Text>Copyright 2021. All Rights Reserved</F.Text>

          <F.Socials>
            <FB height={24} width={24} />
            <TW height={24} width={24} />
            <INSTA height={24} width={24} />
          </F.Socials>
        </F.Bottom>
      </Container>
    </F.Cover>
  );
}
