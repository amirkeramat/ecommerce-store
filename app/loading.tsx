import {  Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      Welcome To E-commerce Store
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default Loading;
