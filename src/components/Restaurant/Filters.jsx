"use client";

import { cuisines, sortOptions } from "@/utils/utils";
import { useForm } from "react-hook-form";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  const { register, watch, handleSubmit, reset } = useForm();
  const cuisinesWatch = watch("cuisines");
  const sortOptionWatch = watch("sortOption");

  return (
    <div className=" ">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[1px_6px_20px_2px_#00000024] xl:hidden">
        <FaFilter />
      </div>
      <div className="hidden min-h-screen w-full items-center justify-center border border-y-2 py-5 xl:flex xl:items-start">
        <div className="flex w-full flex-col px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-semibold">Filters</h1>
            <span
              className="cursor-pointer text-base text-primary"
              onClick={() => reset()}
            >
              Clear All
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-2">
            <h1>Sort By</h1>

            <form>
              <div className="flex flex-col gap-3">
                {sortOptions.map((sortOption) => (
                  <label
                    key={sortOption}
                    className="group flex w-full cursor-pointer flex-row items-center gap-3 text-base hover:scale-[1.01]"
                  >
                    <span
                      className={`h-[15px] w-[15px] rounded-full border border-primary ${sortOptionWatch === sortOption && "bg-primary"}`}
                    ></span>
                    <input
                      type="radio"
                      className="hidden"
                      value={sortOption}
                      name={sortOption}
                      id={sortOption}
                      {...register("sortOption")}
                    />
                    <span className="transition-colors group-hover:text-primary">
                      {sortOption}
                    </span>
                  </label>
                ))}
              </div>
            </form>

            <form>
              <h1 className="mb-3 mt-7">Cuisines</h1>
              <div className="flex flex-col gap-5">
                {cuisines.map((cuisine) => (
                  <label
                    key={cuisine}
                    className="group flex w-full cursor-pointer flex-row items-center gap-3 text-base transition-transform hover:scale-[1.01]"
                  >
                    <span
                      className={`h-[20px] w-[20px] rounded border border-primary ${cuisinesWatch && cuisinesWatch?.includes(cuisine) && "bg-primary"}`}
                    ></span>
                    <input
                      type="checkbox"
                      className="hidden"
                      value={cuisine}
                      name={cuisine}
                      id={cuisine}
                      {...register("cuisines")}
                    />
                    <span className="group-hover:text-primary">{cuisine}</span>
                  </label>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
