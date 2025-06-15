import * as HERO from "./styles";
import * as W from "../../../styles/widgets";
import { Button } from "../../../styles/widgets/Buttons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <HERO.Cover>
      <W.Container>
        <HERO.Layout>
          <HERO.FirstSection>
            <HERO.Title>NEW PRODUCT</HERO.Title>
            <HERO.Heading>XX99 Mark II HeadphoneS</HERO.Heading>
            <HERO.Desc>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </HERO.Desc>
            <Link href="/product/xx99-mark-two-headphones">
              <Button color="orange">See Product</Button>
            </Link>
          </HERO.FirstSection>
        </HERO.Layout>
      </W.Container>
    </HERO.Cover>
  );
}
