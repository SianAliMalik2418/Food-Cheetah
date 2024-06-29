import { CiClock1 } from "react-icons/ci";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantCard = () => {
  return (
    <div className="flex h-[18rem] w-[20rem] cursor-pointer flex-col gap-3 rounded-lg shadow-xl transition-all hover:scale-[1.02] xl:mt-10 xl:w-[19rem]">
      <div className="h-[60%] w-full rounded-lg bg-indigo-600"></div>

      <div className="flex flex-col px-3">
        <h1 className="truncate text-lg font-semibold">SIAN MAKHNI </h1>

        <span className="mt-2 text-sm">$$$ . Pakistani</span>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CiClock1 />
            <span className="text-sm">160-180 min</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <MdOutlineDeliveryDining className="h-full" />
            <span className="text-sm">Rs. 140</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
