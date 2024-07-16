"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import ButtonLoading from "../ui/ButtonLoading";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  searchContext,
  useSearchContext,
} from "@/context/SearchContextProvider";
import { useContext, useState } from "react";

const HeroSectionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const { setSearchedRestaurants } = useContext(searchContext);

  const handleSearch = handleSubmit(async (data) => {
    try {
      setIsLoading(true)
      const resposne = await axios.get(
        `/api/restaurant/search-restaurants/${data.citySearchQuery}`,
      );
      console.log(resposne.data.restaurants);
      setSearchedRestaurants(resposne?.data.restaurants);
      router.push(`/search/restaurants/${data.citySearchQuery}`);
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)

    }
  });

  return (
    <form className="flex w-full flex-col gap-7 px-3" onSubmit={handleSearch}>
      <div className="mt-8 flex items-center gap-2 lg:mt-0">
        <input
          type="text"
          placeholder="Enter your city or Country to find food nearby..."
          className="w-[70%] rounded-md px-4 py-4 shadow-lg outline-none"
          {...register("citySearchQuery", {
            required: "Please enter a city to search!",
          })}
        />
        {errors.citySearchQuery && (
          <span>{errors.citySearchQuery.message}</span>
        )}
        {isLoading ? (
          <ButtonLoading
            loadingMessage={"Searching"}
            className="w-[30%] rounded-md bg-primary-foreground py-7 text-center font-semibold"
          />
        ) : (
          <button
            type="submit"
            className="w-[30%] rounded-md bg-primary-foreground py-4 text-center font-semibold text-white hover:brightness-95"
          >
            Find
          </button>
        )}
      </div>

      <div className="flex w-full items-center justify-between">
        <span className="h-1 flex-1 bg-gray-200"></span>
        <span className="flex-1 text-center">or</span>
        <span className="h-1 flex-1 bg-gray-200"></span>
      </div>

      <Link href={"/search/restaurants"}>
        <button
          type="button"
          className="w-full rounded-md bg-primary-foreground py-4 text-center font-semibold text-white hover:brightness-95"
        >
          Explore Restaurants
        </button>
      </Link>
    </form>
  );
};
export default HeroSectionForm;
