"use client";

import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import CuisiniesSection from "./CuisiniesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";
import ButtonLoading from "@/components/ui/ButtonLoading";

const CreateRestaurantForm = () => {
  const session = useSession();
  const userId = session?.data?.user?.id;

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      menuItems: [{ menuItemName: "", menuItemPrice: "", menuItemImage: "" }],
    },
  });
  const { handleSubmit, reset } = form;

  const handleCreateRestaurant = handleSubmit(async (data) => {
    data.userId = userId;
    try {
      setIsLoading(true);
      const resp = await axios.post("api/restaurant/my-restaurant", data);
      console.log(resp);
      toast.success("Restaurant Created 🎊");
      setIsLoading(false);
      reset()
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      toast.error("Err while creating restaurant!");
    }
  });

  return (
    <div className="mt-10 min-h-full w-full bg-[#fafafa] px-2 py-5 sm:px-10">
      <FormProvider {...form}>
        <form onSubmit={handleCreateRestaurant}>
          <DetailsSection />
          <CuisiniesSection />
          <MenuSection />
          <ImageSection />
          {isLoading ? (
            <ButtonLoading className="mt-5 h-14 w-full bg-primary text-base font-semibold text-white hover:opacity-90" />
          ) : (
            <button className="mt-5 w-full bg-primary py-4 font-semibold text-white hover:opacity-90">
              Create Your Restaurant
            </button>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateRestaurantForm;
