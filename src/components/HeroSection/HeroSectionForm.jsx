import Link from "next/link";

const HeroSectionForm = () => {
  return (
    <form className="flex w-full flex-col gap-7 px-3">
      <div className="flex items-center gap-2 mt-8 lg:mt-0">
        <input
          type="text"
          placeholder="Enter your city or Country to find food nearby..."
          className="w-[70%] rounded-md px-4 py-4 shadow-lg outline-none"
        />
        <button className=" w-[30%] rounded-md bg-primary-foreground py-4 text-center font-semibold text-white hover:brightness-95 ">
          Find
        </button>
      </div>

      <div className=" flex w-full items-center justify-between">
        <span className="h-1 flex-1 bg-gray-200"></span>
        <span className="flex-1 text-center">or</span>
        <span className="h-1 flex-1 bg-gray-200"></span>
      </div>

      <Link href={"/restaurants"}>
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
