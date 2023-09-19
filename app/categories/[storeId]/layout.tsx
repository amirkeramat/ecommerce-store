
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const revalidate = 0;

interface CategoryPageProps {
  children: React.ReactNode;
  params: { storeId: string };
}

const HomePage: React.FC<CategoryPageProps> = async ({
  children,
  params: { storeId },
}) => {
  return (
    <>
      <Navbar storeId={storeId} />
      {children}
      <Footer />
    </>
  );
};

export default HomePage;
