import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import logo from "@/../../public/Chester-Cheetah-LOGO.jpg";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-20 items-center justify-between bg-white px-5 py-2 shadow-lg md:container">
      <FaRegUser className="text-primary-foreground lg:hidden" />
      <div className="flex flex-1 items-center justify-center gap-2 lg:flex-none lg:gap-4">
        <div className="relative h-10 w-10 rounded-full lg:h-14 lg:w-14">
          <Image
            src={logo}
            width={"100"}
            height={"100"}
            alt="Logo"
            className="rounded-full"
          />
        </div>
        <span className="font-semibold text-primary lg:text-xl">
          Food Cheetah
        </span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden items-center justify-center gap-3 lg:flex">
          <button className="rounded-lg border border-primary px-5 py-2 transition-all ease-in-out hover:bg-[#f0ecec] ">
            Login
          </button>
          <button className="rounded-lg border border-primary bg-primary-foreground px-5 py-2 font-semibold text-white transition-all ease-in-out hover:brightness-90 ">
            Sign Up
          </button>
        </div>
        <IoBagHandleOutline className="text-primary-foreground lg:text-2xl" />
      </div>
    </div>
  );
};
export default Navbar;
