"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const {storeId} = useParams()
  const routes = data.map((route) => ({
    href: `/${storeId}/category/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${storeId}/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 items-center space-x-4 lg-space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
