import { getSIngleProductDetails } from "@/services/public/service";
import ProductDetailsClient from "@/components/ProductDetailsClient";
export default async function Products({
  params,
}: {
  params: { slug: any };
}) {
  const resolvedParams = await params;
  const id = resolvedParams.slug;
  const productsDetails: any =
    await getSIngleProductDetails(id);
  return (
    <ProductDetailsClient
      productsDetails={productsDetails}
    />
  );
}
