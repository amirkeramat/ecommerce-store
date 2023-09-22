import GetStores from "@/actions/get-stores";
import React from "react";
import StoreListBox from "../../components/ui/store-list-box";

const SetupPage = async () => {
  const stores = await GetStores();

  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full h-full bg-black/25">
      <div className="shadow-xl flex flex-col items-center justify-around px-4 bg-white h-80  rounded-xl">
        <h2 className="font-bold text-2xl">Select The Store to Enter.</h2>
        <StoreListBox stores={stores} />
      </div>
    </div>
  );
};

export default SetupPage;
