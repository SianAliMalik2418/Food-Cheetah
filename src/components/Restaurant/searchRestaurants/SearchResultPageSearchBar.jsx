"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { useForm } from "react-hook-form";

const SearchResultPageSearchBar = () => {
  const { register, watch, handleSubmit } = useForm();

  const handleSearch = handleSubmit((data) => {
    console.log(data);
    // try {
    //   await axios
    // } catch (error) {
    //   console.log(error);
    // }
  });

  return (
    <form className="flex gap-1 text-3xl w-full" onSubmit={handleSearch}>
      <IoIosSearch className="text-2xl text-secondary transition-colors group-hover:text-primary" />
      <input
        placeholder="Search for restaurants, cuisnines"
        className="w-full border-none bg-[#F7F7F7] text-base text-secondary shadow-none outline-none focus-visible:ring-0"
        {...register("searchQuery", {
          required: "Please type something before searching",
        })}
      />
    </form>
  );
};

export default SearchResultPageSearchBar;
