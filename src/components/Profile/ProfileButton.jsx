import { FaRegUser, FaHome } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LogoutButton } from "../authComponents/AuthButtons";

const ProfileButton = ({ className }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <FaRegUser
            className={`border-none text-primary-foreground lg:hidden ${className}`}
          />
        </SheetTrigger>
        <SheetContent side="left" className="w-full">
          <div className="mt-4">
            <SheetTitle>
              <span>Food Cheetah</span>
            </SheetTitle>
          </div>

          <SheetDescription>
            <span className="mt-24 flex flex-col gap-10 text-lg">
              <Link href={"/"}>
                <span className="flex items-center gap-3">
                  <FaHome />
                  <span>Home</span>
                </span>
              </Link>
              <Link href={"/profile"}>
                <span className="flex items-center gap-3">
                  <FaRegUser />
                  <span>Profile</span>
                </span>
              </Link>
              <Link href={"/restaurants"}>
                <span className="flex items-center gap-3">
                  <IoRestaurantOutline />
                  <span>Restaurants</span>
                </span>
              </Link>
              <LogoutButton />
            </span>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default ProfileButton;
