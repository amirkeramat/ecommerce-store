import React from "react";

interface HomePageProps {
  children: React.ReactNode;
  
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return <>{children}</>;
};

export default HomePage;
