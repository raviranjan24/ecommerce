import MostSellerProducts from "@/components/home/mostSellerProducts";
import HomeSlider from "@/components/home/slider";
import Search from "@/components/common/search";
import QuickView from "@/components/cart/quickView";
import Compare from "@/components/common/compare";
import SizeGuide from "@/components/common/sizeGuide";
import ShopByCategory from "@/components/common/shopByCategory";
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
      <ShopByCategory data={getAllCategoryList} />
      {latesetProducts && latesetProducts?.data?.products.length > 0 ? (
        <MostSellerProducts products={latesetProducts?.data?.products} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No product data found
        </div>
      )}
      {getTopSellProductList && getTopSellProductList?.data?.length > 0 ? (
        <TopSellerProducts products={getTopSellProductList?.data} />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No product data found
        </div>
      )}
      <BannerGrid banner={getOfferBannerData?.data} />
      <Search />
      <QuickView />
      <Compare />
      <SizeGuide />
    </>
  )
}
