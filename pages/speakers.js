import React, { useEffect } from "react";
import SubHeader from "../components/Header/SubHeader";
import Layout from "../components/Layout";
import ProductItem from "../components/Product/ProductItem";
import { Container } from "../styles/widgets";
import { Cards } from "../components/Cards/styles";
import Card1 from "../components/Cards/Card1";
import PreFooter from "../components/PreFooter";
import data from "../data.json";
import AOS from "aos";

export default function Speakers({ title, speakers }) {
  return (
    <Layout title={title}>
      <SubHeader title="SPEAKERS" />
      <Container>
        {speakers.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            reverse={index % 2 === 1}
            center={true}
          />
        ))}

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

        <PreFooter />
      </Container>
    </Layout>
  );
}

export function getServerSideProps() {
  const speakers = data
    .filter((product) => product.category === "speakers")
    .reverse();

  return {
    props: {
      title: "Audoiphile | Speakers",
      speakers,
    },
  };
}
