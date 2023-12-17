import React from "react";

import Hero from "../hero/hero";
import Popular from "../Popular/Popular";
import Offer from "../Offer/Offer";
import NewCollection from "../NewCollections/NewCollection";
import NewsLatter from "../NewsLetter/NewsLetter";

export const Shop = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLatter />
    </div>
  );
};
export default Shop;
