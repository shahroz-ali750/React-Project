import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Popular } from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollections from "../components/NewCollections/Newcollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
export const Shop = () => {
  return (
    <div>
      <Banner />
      <Popular />
      <Offers />
      <Newcollections/>
      <NewsLetter/>
    </div>
  );
};
