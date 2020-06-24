import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <>
      <Hero title="compras online" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          nossos produtos
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
