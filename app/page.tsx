import MostSellerProducts from "@/components/home/mostSellerProducts";
import HomeSlider from "@/components/home/slider";
import Search from "@/components/common/search";
import QuickView from "@/components/cart/quickView";
import Compare from "@/components/common/compare";
import SizeGuide from "@/components/common/sizeGuide";
import ShopByCategory from "@/components/common/shopByCategory";
import SingleImage from "@/components/home/singleImage";
import BannerGrid from "@/components/home/multipleGrid";
import { getAllCatgoryList, getLatesetProduct, getOfferBanner, getSliders, getTopSellingProduct } from "@/services/public/service";
import TopSellerProducts from "@/components/home/topSellers";

export default async function page() {
  const sliders: any = await getSliders();
  const latesetProducts: any = await getLatesetProduct();
  const getOfferBannerData: any = await getOfferBanner();
  const getTopSellProductList: any = await getTopSellingProduct();
  const getAllCategoryList: any = await getAllCatgoryList();
  return (
    <>
      {sliders && sliders?.data?.grid[0]?.length > 0 ? (
        <HomeSlider sliders={sliders?.data?.grid[0]} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No slider data found
        </div>
      )}
      <br />
      <BannerGrid banner={getOfferBannerData?.data} />
      <br />
      <br />
      <br />
      <ShopByCategory data={getAllCategoryList}/>
      <br />
      <SingleImage
        imageUrl="/images/10.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <br />
      {latesetProducts && latesetProducts?.data?.products.length > 0 ? (
        <MostSellerProducts products={latesetProducts?.data?.products} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No product data found
        </div>
      )}
      <br />
      <SingleImage
        imageUrl="/images/9.jpg"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <br />
      {/* <TopSellers /> */}
      <BannerGrid />
      <br />
      <br />
      <br />
      {getTopSellProductList && getTopSellProductList?.data?.length > 0 ? (
        <TopSellerProducts products={getTopSellProductList?.data} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No product data found
        </div>
      )}
      <br />
      <SingleImage
        imageUrl="/images/7.webp"
        link="/categories/100"
        alt="Mega Sale Banner"
      />
      <Search />
      <QuickView />
      <Compare />
      <SizeGuide />
    </>
  )
}
