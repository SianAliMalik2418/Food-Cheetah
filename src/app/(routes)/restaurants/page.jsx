import Filters from "@/components/Restaurant/Filters";
import RestaurantCard from "@/components/Restaurant/RestaurantCard";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

const RestaurantsPage = () => {
  return (
    <div className="flex min-h-screen flex-col px-2 py-10 xl:flex-row">
      <div className="flex w-full items-center justify-center gap-2 xl:hidden">
        <div className="flex w-[90%] items-center gap-2 rounded-xl bg-[#F7F7F7] px-3 py-4">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines and dishes"
            className="w-full bg-[#F7F7F7] text-secondary"
          />
        </div>

        <Filters />
      </div>

      <div className="w-[20%]">
        <Filters />
      </div>
      <div className="mt-10 flex flex-col gap-3 px-3 py-2 xl:mt-0 xl:max-w-[80%] xl:px-7">
        <div className="group flex items-center gap-1 rounded-3xl bg-[#F7F7F7] px-4 py-4 text-3xl transition-all hover:shadow-[0px_6px_12px_4px_#00000024]">
          <IoIosSearch className="text-secondary transition-colors group-hover:text-primary" />
          <Input
            placeholder="Search for restaurants, cuisnines"
            className="border-none bg-[#F7F7F7] text-base text-secondary shadow-none outline-none focus-visible:ring-0"
          />
        </div>
        <h1 className="text-lg font-bold xl:mt-10 xl:text-3xl">
          5 restaurants found in Lahore
        </h1>
        <div className="mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-14 md:flex-row md:items-start md:py-5 xl:-mt-5 xl:items-start xl:justify-start xl:gap-10 xl:px-2">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};
export default RestaurantsPage;
