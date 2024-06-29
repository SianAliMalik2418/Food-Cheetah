
import ProfileForm from "@/components/Profile/ProfileForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const session = getServerSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="flex min-h-screen py-10 md:items-center md:justify-center">
      <div className="flex w-full flex-col gap-9 px-5 py-5 md:mx-auto md:min-h-screen md:max-w-[700px]">
        <h1 className="text-xl font-bold md:text-3xl">My Profile</h1>

        <ProfileForm />
      </div>
    </div>
  );
};
export default ProfilePage;
