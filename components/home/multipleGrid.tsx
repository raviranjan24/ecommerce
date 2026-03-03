import React from "react";
import SingleImage from "./singleImage";

const BannerGrid = () => {
  return (
    <div className="container-fluid" style={{ margin: "-40px 0px -50px 0px" }}>
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <SingleImage
            imageUrl="/images/2.webp"
            link="/category/men"
            alt="Men Collection"
          />
        </div>

        <div className="col-12 col-md-4">
          <SingleImage
            imageUrl="/images/4.gif"
            link="/category/women"
            alt="Women Collection"
          />
        </div>

        <div className="col-12 col-md-4">
          <SingleImage
            imageUrl="/images/6.webp"
            link="/category/kids"
            alt="Kids Collection"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;