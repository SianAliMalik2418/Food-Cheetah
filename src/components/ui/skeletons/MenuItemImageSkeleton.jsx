import { Skeleton } from "../skeleton";

const MenuItemImageSkeleton = () => {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="ml-4 h-20 w-32 rounded-xl bg-gray-300" />
    </div>
  );
};
export default MenuItemImageSkeleton;
