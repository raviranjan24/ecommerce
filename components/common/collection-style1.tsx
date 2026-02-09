import { collectionBanners } from "@/utils/collectionBanners";
import Link from "next/link";

const CollectionStyle = () => {
  return (
    <section>
      <div className="flat-img-with-text-6">
        {collectionBanners?.map((item) => (
          <div
            key={item.id}
            className="collection-position hover-img style-6"
          >
            <div className="img-style">
              <img
                className="lazyload effect-paralax"
                src={item.image}
                data-src={item.image}
                alt={item.title}
              />
            </div>
            <div className="content cls-content w-full">
              <div className="cls-heading gap-8 mb_17">
                <h3>
                  <Link
                    href={item.titleLink}
                    className="link text_white wow fadeInUp"
                    data-wow-delay={item.delayTitle}
                  >
                    {item.title}
                  </Link>
                </h3>

                <p
                  className="text_white text-body-default wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {item.description}
                </p>
              </div>

              <Link
                href={item.buttonLink}
                className="tf-btn btn-white mx-auto wow fadeInUp"
                data-wow-delay={item.delayBtn}
              >
                {item.buttonText} <i className="icon-arrow-up-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionStyle;