import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface StorePageProps {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}

const StorePage: React.FC<StorePageProps> = ({
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

export default StorePage;
