import React from "react";
import "./descriptionBox.css";
export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual market place where businessman and individuals can
          show their products, interact with customers, and conduct transactions
          without the need for a physical presence. E-commerce websites have
          gained immense popularity due to their convenience, accessibility and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically displa products or services along the
          the detailed description, images, prices, and available variations
          (e.g., sizes, colors), Each product usually has its own dedicated page
          with relevant information
        </p>
      </div>
    </div>
  );
};
