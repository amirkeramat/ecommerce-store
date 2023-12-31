interface ProductPageProps {
  params: {
    productId: string;
    storeId: string;
  };
}

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import React from "react";
import Info from "@/components/info";

const ProductPage: React.FC<ProductPageProps> = async ({
  params: { productId, storeId },
}) => {
  const product = await getProduct(productId, storeId);

  const suggestedProducts = await getProducts(
    {
      categoryId: product?.category?.id,
    },
    storeId
  );


  return (
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 lg:items-start md:gap-x-4">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 md:mt-0 sm:px-0 ">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
  );
};

export default ProductPage;
