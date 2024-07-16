import Filters from "@/components/Restaurant/restaurantUiComponents/Filters";
import RestaurantCard from "@/components/Restaurant/restaurantUiComponents/RestaurantCard";
import SearchResultPageSearchBar from "@/components/Restaurant/searchRestaurants/SearchResultPageSearchBar";

import { connectDB } from "@/db/dbConfig";
import { RestaurantModel } from "@/models/restaurantModel";
import React from "react";

const AllRestaurantsPage = async () => {
  await connectDB();

  const restaurants = await RestaurantModel.find({});
  console.log(restaurants);

  return (
    <div className="flex min-h-screen flex-col px-2 py-10 xl:flex-row">
      {/* Mobile view */}
      <div className="flex w-full items-center justify-center gap-2 xl:hidden">
        <div className="flex w-[90%] items-center gap-2 rounded-xl bg-[#F7F7F7] px-3 py-4">
          <SearchResultPageSearchBar />
        </div>

        <Filters />
      </div>

      {/* Desktop view */}
      <div className="hidden w-[20%] xl:block">
        <div className="sticky top-0 h-[500px] overflow-y-auto">
          <Filters />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3  px-3 py-2 xl:mt-0 xl:max-w-[85%] xl:px-7">
        <div className="group hidden w-full items-center gap-1 rounded-3xl bg-[#F7F7F7] px-4 py-4 transition-all hover:shadow-[0px_6px_12px_4px_#00000024] xl:flex">
          <SearchResultPageSearchBar />
        </div>
        <h1 className="text-lg font-bold xl:mt-10 xl:text-3xl">
          5 restaurants found Worldwide.
        </h1>
        <div className="mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-14 md:flex-row md:items-start md:py-5 xl:-mt-5 xl:items-start xl:justify-start xl:gap-5 xl:px-2">
          {restaurants &&
            restaurants.map((restaurant) => (
              <React.Fragment key={restaurant._id}>
                <RestaurantCard restaurant={restaurant} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllRestaurantsPage;
