import React from "react";
import Layout from "../../components/Layout";
import data from "../../data.json";
import { Container } from "../../styles/widgets";
import { Cards } from "../../components/Cards/styles";
import * as styles from "../../styles/ProductPageStyles";
import ProductItem from "../../components/Product/ProductItem";
import Image from "next/image";
import Card2 from "../../components/Cards/Card2";
import Card1 from "../../components/Cards/Card1";
import PreFooter from "../../components/PreFooter";
import { BackBtn } from "../../styles/widgets/Buttons";
import Link from "next/link";

export default function Product({ title, product, prev }) {
  return (
    <Layout title={title}>
      <styles.Cover>
        <Container>
          <Link href={prev} passHref>
            <BackBtn>Go Back</BackBtn>
          </Link>
          <ProductItem product={product} _addToCart={true} />
          <styles.Content>
            <styles.Content1>
              <styles.Header>FEATURES</styles.Header>
              <styles.Text>{product.features}</styles.Text>
            </styles.Content1>
            <styles.Content2>
              <styles.Header>IN THE BOX</styles.Header>
              <div>
                {product.includes.map((feature, index) => (
                  <styles.FeatureItem key={index}>
                    <span>{feature.quantity}x</span>
                    <styles.Text>{feature.item}</styles.Text>
                  </styles.FeatureItem>
                ))}
              </div>
            </styles.Content2>
          </styles.Content>
          <styles.Images>
            <div className="first">
              <Image
                unoptimized
                height={280}
                width={445}
                src={product.gallery.first.desktop}
                alt=""
              />
              <Image
                unoptimized
                height={280}
                width={445}
                src={product.gallery.second.desktop}
                alt=""
              />
            </div>
            <Image
              unoptimized
              height={610}
              width={635}
              src={product.gallery.third.desktop}
              alt=""
            />
          </styles.Images>
          <styles.Header center>YOU MAY ALSO LIKE</styles.Header>
          <Cards>
            {product.others.map((product, index) => (
              <Card2 key={index} product={product} />
            ))}
          </Cards>
          <Cards>
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
          </Cards>
          <PreFooter noAnimate={true} />
        </Container>
      </styles.Cover>
    </Layout>
  );
}

export function getServerSideProps({ query, req }) {
  const product = data.find((product) => product.slug === query.slug);

  return {
    props: {
      title: `Audoiphile | ${product.name}`,
      prev: req.headers.referer || "/",
      product,
    },
  };
}
