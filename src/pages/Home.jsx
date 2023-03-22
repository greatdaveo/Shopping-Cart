import React from "react";
import ProductCard from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <main>
      <section className="products">
        <ProductCard />
      </section>
    </main>
  );
};

export default Home;
