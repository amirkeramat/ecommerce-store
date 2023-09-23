import { Loader, Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex justify-center items-center">
      Loading The Store Please Waite a Moment
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default Loading;
