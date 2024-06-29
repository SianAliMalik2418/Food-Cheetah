import Image from "next/image";
import { IoBagHandleOutline } from "react-icons/io5";
import logo from "@/../../public/Chester-Cheetah-LOGO.jpg";
import Link from "next/link";
import LoginModal from "@/components/authComponents/LoginModal";
import { FaRegUser } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProfileButton from "../Profile/ProfileButton";
import DropDownProfileButton from "./DropDownProfileButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <div className="mx-auto flex h-20 items-center justify-between bg-white px-5 py-2 shadow-lg md:container">
      {session ? (
        <>
          <div className="block flex-1 lg:hidden">
            <ProfileButton />
          </div>
          <Link href={"/"}>
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
          </Link>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            <DropDownProfileButton firstName={firstName} />
            <IoBagHandleOutline
              className="text-primary-foreground lg:text-2xl"
              cursor={"pointer"}
            />
          </div>

          <div className="flex flex-1 items-end justify-end  lg:hidden">
            <IoBagHandleOutline
              className="text-primary-foreground lg:text-2xl"
              cursor={"pointer"}
            />
          </div>
        </>
      ) : (
        <>
          <LoginModal
            text={<FaRegUser />}
            stylingClasses={"text-primary-foreground lg:hidden border-none"}
          />
          <Link href={"/"}>
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
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden items-center justify-center gap-3 lg:flex">
              <LoginModal
                text={"Login"}
                stylingClasses={
                  "rounded-lg border border-primary px-6 py-5 transition-all ease-in-out hover:bg-[#f0ecec]"
                }
              />
              <LoginModal
                text={"Sign Up"}
                stylingClasses={
                  "rounded-lg border border-primary bg-primary-foreground px-6 py-5 font-semibold text-white transition-all ease-in-out hover:brightness-90"
                }
              />
            </div>
            <IoBagHandleOutline
              className="text-primary-foreground lg:text-2xl"
              cursor={"pointer"}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
