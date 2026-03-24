import MostSellerProducts from "@/components/home/mostSellerProducts";
import HomeSlider from "@/components/home/slider";
import Search from "@/components/common/search";
import ShopingCart from "@/components/cart/shoppingCart";
import QuickView from "@/components/cart/quickView";
import Compare from "@/components/common/compare";
import SizeGuide from "@/components/common/sizeGuide";
import ShopByCategory from "@/components/common/shopByCategory";
import TopSellers from "@/components/home/topSellers";
import SingleImage from "@/components/home/singleImage";
import BannerGrid from "@/components/home/multipleGrid";
import { getSliders } from "@/services/public/service";

export default async function page() {
  const sliders: any = await getSliders();
  return (
    <>
      {sliders && sliders?.data?.length > 0 ? (
        <HomeSlider sliders={sliders?.data} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No slider data found
        </div>
      )}
      <br />
      <BannerGrid />
      <br />
      <br />
      <br />
      <ShopByCategory />
      <br />
      <SingleImage
        imageUrl="/images/10.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <br />
      <MostSellerProducts />
      <br />
      <SingleImage
        imageUrl="/images/9.jpg"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <TopSellers />
      <BannerGrid />
      <br />
      <br />
      <br />
      <MostSellerProducts />
      <br />
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
