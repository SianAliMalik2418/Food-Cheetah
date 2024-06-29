"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProfileForm = () => {
  const { data: session } = useSession();
  const [isDisabled, setIsDisabled] = useState(true);
  const [defaultUsername, setDefaultUsername] = useState("");

  // REACT-HOOK-FORM-ELEMENTS
  const { register, handleSubmit, formState, setValue, watch } = useForm();
  const { errors, isSubmitting, isDirty } = formState;
  const username = watch("username");

  // FUNCS TO HANDLE PROFILE
  const handleUpdateProfile = handleSubmit(async (data) => {
    try {
      const resp = await axios.put(
        `api/user/updateUser/${session?.user?.id}`,
        data,
      );
      console.log(resp);
      toast.success("Profile updated successfully 🎊");
    } catch (error) {
      console.log(error);
      toast.success("Error while updating Profile!");
    }
  });

  const handleGetUser = async () => {
    try {
      const resp = await axios.get(`api/user/getUser/${session?.user?.id}`);
      setValue("username", resp?.data?.username);
      setValue("email", resp?.data?.email);
      setDefaultUsername(resp?.data?.username);
    } catch (error) {
      console.log(error);
    }
  };

  // LOAD INITIAL USER DETAILS ON FIRST RENDER
  useEffect(() => {
    handleGetUser();
  }, []);

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
            type="Username"
            id="Username"
            placeholder="Username"
            {...register("username", { required: "This Field is required" })}
          />
          {errors.username && (
            <span className="px-2 text-base text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="mt-8 bg-primary-foreground px-10 text-white hover:bg-primary hover:brightness-90"
        disabled={username == defaultUsername || isSubmitting}
      >
        {isSubmitting ? (<>Saving</>) : (<>Save</>)}
      </Button>
    </form>
  );
};
export default ProfileForm;
