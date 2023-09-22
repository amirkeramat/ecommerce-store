import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import GetStores from "@/actions/get-stores";


export const revalidate = 0;

interface NavbarProps{
  storeId:string
}

const Navbar: React.FC<NavbarProps> = async ({
  storeId
}) => {
  const stores = await GetStores();
  const categories = await getCategories(storeId);
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex h-16 items-center">
          <Link href={`/`} className="ml-4 flex lg-ml-0 gap-x-2">
            <p className="font-bold text-xl text-neutral-500">Switch Store</p>
          </Link>
          <Link href={`/${storeId}`} className="ml-4 flex lg-ml-0 gap-x-2">
            <p className="font-bold text-xl hover:text-black duration-200">Home</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
