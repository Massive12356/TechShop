import React from "react";
import * as MS from "./styles";
import { Container } from "../../../styles/widgets";
import Card1 from "../../Cards/Card1";
import { Button } from "../../../styles/widgets/Buttons";
import PreFooter from "../../PreFooter";
import Link from "next/link";

export default function MainSection() {
  return (
    <Container>
      <MS.Cards>
        <Card1
          title="HEADPHONES"
          img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          route="/headphones"
        />
        <Card1
          title="SPEAKERS"
          img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          route="/speakers"
        />
        <Card1
          title="EARPHONES"
          img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          route="/earphones"
        />
      </MS.Cards>

      <MS.ShowCase1 data-aos="fade-right">
        <span className="rad1"></span>
        <span className="rad2"></span>
        <span className="rad3"></span>
        <div className="image"></div>
        <div className="content">
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/product/zx9-speaker">
            <Button color="black">SEE PRODUCT</Button>
          </Link>
        </div>
      </MS.ShowCase1>

      <MS.ShowCase2 data-aos="fade-up">
        <MS.Text>ZX7 SPEAKER</MS.Text>
        <Link href="/product/zx7-speaker">
          <Button color="transparent" border>
            SEE PRODUCT
          </Button>
        </Link>
      </MS.ShowCase2>

      <MS.ShowCase3>
        <div className="img"></div>

        <div className="content">
          <MS.Text>YX1 EARPHONES</MS.Text>
          <Link href="/product/yx1-earphones">
            <Button color="transparent" border>
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </MS.ShowCase3>

      <PreFooter />
    </Container>
  );
}
