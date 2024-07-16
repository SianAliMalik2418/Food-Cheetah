import { FaRegUser, FaHome } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LogoutButton } from "../authComponents/AuthButtons";

const ProfileButton = ({ className }) => {
  const navLinks = [
    {
      label: "Home",
      icon: <FaHome />,
      href: "/",
    },
    {
      label: "Profile",
      icon: <FaRegUser />,
      href: "/profile",
    },
    {
      label: "Restaurants",
      icon: <IoRestaurantOutline />,
      href: "/restaurants",
    },
    {
      label: "My Restaurant",
      icon: <LuChefHat />,
      href: "/myRestaurant",
    },
  ];

  return (
    <>
      <Sheet className="bg-red-500">
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

          <div className="mt-20 flex flex-col gap-10 text-xl font-semibold">
            {navLinks.map((navLink, index) => (
              <SheetClose asChild key={index}>
                <Link href={navLink.href} className="flex items-center gap-3">
                  {navLink.icon}
                  <span>{navLink.label}</span>
                </Link>
              </SheetClose>
            ))}
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProfileButton;
