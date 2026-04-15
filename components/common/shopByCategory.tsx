import Link from "next/link";

const ShopByCategory = ({data}:any) => {
  return (
    <section style={{ margin: "10px 0px 10px 0px" }}>
      <div className="container-fluid">
        <div className="col-12">
          <div className="heading-section style-2">
            <div className="left">
              <h3 className="wow fadeInUp" style={{ fontSize: "20px"}}>Shop By Categories</h3>
            </div>
          </div>
          <div className="wrap-categories overflow-x-auto style-2">
            {data?.data?.map((cat:any,ind:any) => (
              <div
                key={ind}
                className="categories-item hover-img style-2 wow fadeInUp"
                data-wow-delay={cat.delay}
              >
                <div className="img-style">
                  <Link href={cat?.slug}>
                    <img src={cat?.image} alt={cat?.title} />
                  </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href={cat?.slug} className="link">
                      {cat?.title}
                    </Link>
                  </h5>
                  <p className="text-body-default text_secondary">
                    {cat?.items} items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;