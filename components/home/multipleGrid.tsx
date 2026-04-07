import React from "react";
import SingleImage from "./singleImage";

const BannerGrid = ({ banner }: any) => {
  return (
    <div className="container-fluid" style={{ margin: "-40px 0px -50px 0px" }}>
      <div className="row g-4">
        {banner?.offers?.map((data:any, id:any) => {
          return (
            <div className="col-12 col-md-4" key={id}>
              <SingleImage
                imageUrl={data?.image}
                link={`/products/${data?._id}`}
                alt={data?.title}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default BannerGrid;