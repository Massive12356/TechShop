import { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import MainSection from "../components/Home/MainSection";
import Layout from "../components/Layout";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Layout>
      <HeroSection />
      <MainSection />
    </Layout>
  );
}
