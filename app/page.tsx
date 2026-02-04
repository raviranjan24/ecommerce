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

export default function page() {
  return (
    <>
      <HomeSlider />
      <ShopByCategory />
      <MostSellerProducts />
      <CollectionStyle />
      <TopSellers />
      <CollectionStyle />
      <MostSellerProducts />
      <CollectionStyle2 />
      <Search />
      <ShopingCart />
      <QuickView />
      <Compare />
      <SizeGuide />
    </>
  )
}
