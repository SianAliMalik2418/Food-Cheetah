"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "sonner";

const ProfileForm = () => {
  const { data: session, status } = useSession();

  // REACT-HOOK-FORM-ELEMENTS
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors, isSubmitting, isDirty } = formState;

  // FUNCS TO HANDLE PROFILE
  const handleUpdateProfile = handleSubmit(async (data) => {
    try {
      const resp = await axios.put(
        `/api/user/updateUser/${session?.user?.id}`,
        data
      );
      toast.success("Profile updated successfully 🎊");
    } catch (error) {
      console.log(error);
      toast.error("Error while updating profile!");
    }
  });

  const handleGetUser = async () => {
    if (session?.user?.id) {
      try {
        const resp = await axios.get(`/api/user/getUser/${session.user.id}`);
        setValue("username", resp?.data?.username);
        setValue("email", resp?.data?.email);
        setValue("city", resp?.data?.city);
        setValue("adress", resp?.data?.adress);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // LOAD INITIAL USER DETAILS ON FIRST RENDER
  useEffect(() => {
    if (status === "authenticated") {
      handleGetUser();
    }
  }, [session, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Please log in</p>;

  return (
    <form
      onSubmit={handleUpdateProfile}
      className="md:w-full md:items-center md:justify-center"
    >
      <div className="flex flex-col gap-7">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="border-[#2c2c2c] outline-none focus:ring-0"
            readOnly
            disabled
            {...register("email")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="Username">Username</Label>
          <Input
            type="text"
            id="Username"
            placeholder="Username"
            {...register("username", { required: "This field is required" })}
          />
          {errors.username && (
            <span className="px-2 text-base text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-5 py-2 xl:flex-row">
          <div className="grid w-full max-w-sm flex-1 items-center gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              placeholder="City"
              {...register("city", { required: "This field is required" })}
            />
            {errors.city && (
              <span className="px-2 text-base text-red-500">
                {errors.city.message}
              </span>
            )}
          </div>
          <div className="grid w-full max-w-sm flex-1 items-center gap-2">
            <Label htmlFor="adress">Address Line 1</Label>
            <Input
              type="text"
              id="adress"
              placeholder="Address"
              {...register("adress", { required: "This field is required" })}
            />
            {errors.adress && (
              <span className="px-2 text-base text-red-500">
                {errors.adress.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="mt-8 bg-primary-foreground px-10 text-white hover:bg-primary hover:brightness-90"
        disabled={!isDirty || isSubmitting}
      >
        {isSubmitting ? <>Saving</> : <>Save</>}
      </Button>
    </form>
  );
};

export default ProfileForm;
