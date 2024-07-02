import { cuisines } from "@/utils/utils";
import { useFormContext } from "react-hook-form";

const CuisiniesSection = () => {
  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = useFormContext();

  const cuisinesWatch = watch("cuisines");

  return (
    <>
      <div className="mt-10 flex w-full flex-row items-center justify-between lg:mb-2 lg:mt-20">
        <h1 className="text-xl font-bold lg:text-3xl">Cuisines</h1>
        <span
          className="cursor-pointer text-sm text-primary lg:text-base"
          onClick={() => reset()}
        >
          Clear All
        </span>
      </div>
      <span className="text-xs lg:text-base">
        Enter different cuisines your restaurant provide.
      </span>

      {errors.cuisines && (
        <div className="text-sm text-red-500">{errors?.cuisines?.message}</div>
      )}

      <div>
        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:flex-wrap lg:mt-6">
          {cuisines.map((cuisine) => (
            <label
              key={cuisine}
              className="group flex w-full cursor-pointer flex-row items-center gap-3 text-sm transition-transform hover:scale-[1.01] sm:w-40 sm:py-2 lg:text-base"
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
                {...register("cuisines", {
                  validate: (cuisines) => {
                    if (cuisines && cuisines.length > 0) {
                      return true;
                    } else {
                      return "Atleast One Cuisine Item Should be selected!";
                    }
                  },
                })}
              />
              <span
                className={`group-hover:text-primary ${errors.cuisines && "text-red-500 font-medium"}`}
              >
                {cuisine}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
export default CuisiniesSection;
