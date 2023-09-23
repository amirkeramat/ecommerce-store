import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GetStores from "@/actions/get-stores";
import { redirect } from "next/navigation";
import getBanners from "@/actions/get-banner";
import Banner from "@/components/banner";
import { Suspense } from "react";
import Loading from "@/app/loading";

export const revalidate = 0;

interface HomePageProps {
  params: {
    storeId: string;
  };
}

const HomePage: React.FC<HomePageProps> = async ({ params: { storeId } }) => {
  const products = await getProducts({ isFeatured: true }, storeId);
  const stores = await GetStores();
  const banner = await getBanners(storeId);

  if (!stores.some((store) => store.id === storeId)) {
    redirect(`/`);
  }
  const activeStore = stores.find((store) => store.id === storeId);
  return (
    <>
      <Navbar storeId={storeId} />
      <Suspense fallback={<Loading/>}>
         <Container>
        <span className="flex flex-col items-center  pt-2 text-3xl font-bold">
          Welcome To
          <h1 className="font-semibold text-2xl text-gray-700">
            {activeStore?.name}
          </h1>
        </span>
        <div className="space-y-10 pb-10">
          <Banner data={banner} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
      </Suspense>
     
      <Footer />
    </>
  );
};

export default HomePage;
