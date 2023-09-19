import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GetStores from "@/actions/get-stores";
import { redirect } from "next/navigation";

export const revalidate = 0;

interface HomePageProps {
  params: {
    storeId: string;
  };
}

const HomePage: React.FC<HomePageProps> = async ({ params: { storeId } }) => {
  const billboard = await getBillboard("db622121-c697-4da0-8b8a-e20b73c3706b",storeId);
  const products = await getProducts({ isFeatured: true },storeId);
  const stores = await GetStores();


  if (!stores.some((store) => store.id === storeId)) {

    redirect(`/`);
  }

  return (
    <>
      <Navbar storeId={storeId} />
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
