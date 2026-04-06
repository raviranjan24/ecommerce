import Link from "next/link";

const ShopByCategory = ({data}:any) => {
  return (
    <section>
      <div className="container-fluid">
        <div className="col-12">
          <div className="heading-section style-2">
            <div className="left">
              <h3 className="wow fadeInUp">Shop By Categories</h3>
            </div>

            <div className="right wow fadeInUp">
              <Link href="/categories/100" className="btn-line">
                <span>View All Products</span>
                <i className="icon-arrow-up-right" />
              </Link>
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