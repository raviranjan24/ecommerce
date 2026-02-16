import MostSellerProducts from "@/components/home/mostSellerProducts";
import HomeSlider from "@/components/home/slider";
import Search from "@/components/common/search";
import ShopingCart from "@/components/cart/shoppingCart";
import QuickView from "@/components/cart/quickView";
import Compare from "@/components/common/compare";
import SizeGuide from "@/components/common/sizeGuide";
import ShopByCategory from "@/components/common/shopByCategory";
import CollectionStyle from "@/components/common/collection-style1";
import CollectionStyle2 from "@/components/common/collection-style2";
import TopSellers from "@/components/home/topSellers";
import SingleImage from "@/components/home/singleImage";
import BannerGrid from "@/components/home/multipleGrid";

export default function page() {
  return (
    <>
      <HomeSlider />
      <SingleImage
        imageUrl="/images/bannerHome.png"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <BannerGrid />
      <SingleImage
        imageUrl="/images/1.jpg"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <ShopByCategory />
      <br/>
      <SingleImage
        imageUrl="/images/10.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <MostSellerProducts />
      <br/>
      <BannerGrid />
      <TopSellers />
      <SingleImage
        imageUrl="/images/9.jpg"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      {/* <CollectionStyle /> */}
      <BannerGrid />
      <SingleImage
        imageUrl="/images/3.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <MostSellerProducts />
      <SingleImage
        imageUrl="/images/5.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      {/* <CollectionStyle2 /> */}
      <BannerGrid />
      <SingleImage
        imageUrl="/images/7.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <Search />
      <ShopingCart />
      <QuickView />
      <Compare />
      <SizeGuide />
    </>
  )
}
