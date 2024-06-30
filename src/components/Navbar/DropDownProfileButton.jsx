import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LogoutButton } from "../authComponents/AuthButtons";
import { FaHome, FaRegUser } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDownProfileButton = ({ email }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <div className="flex cursor-pointer items-center justify-center gap-1 rounded-md px-2 py-1 transition-all ease-in-out hover:bg-yellow-200">
          <FaRegUser />
          <span className="ml-1 mr-2">{email}</span>
          <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex w-full flex-col justify-center gap-5 px-5 py-4">
          <DropdownMenuItem>
            <Link href={"/"}>
              <span className="flex items-center gap-3">
                <FaHome />
                <span>Home</span>
              </span>
            </Link>{" "}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/profile"}>
              <span className="flex items-center gap-3">
                <FaRegUser />
                <span>Profile</span>
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <Link href={"/restaurants"}>
              <span className="flex items-center gap-3">
                <IoRestaurantOutline />
                <span>Restaurants</span>
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropDownProfileButton;
