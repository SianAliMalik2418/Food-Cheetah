import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import Image from "next/image";

const MenuItem = ({ menuItemNo, remove, totalItems }) => {
  const [menuItemImgUrl, setMenuItemImgUrl] = useState("");
  const { register, formState, setValue, watch } = useFormContext();
  const { errors } = formState;

  const existingMenuItemImgUrl = watch(`menuItems.${menuItemNo}.menuItemImage`);
  const handleImageUpload = (url) => {
    setMenuItemImgUrl(url);
    setValue(`menuItems.${menuItemNo}.menuItemImage`, url, {
      shouldValidate: true,
    });
  };

  useEffect(() => {
    if (existingMenuItemImgUrl) {
      setMenuItemImgUrl(existingMenuItemImgUrl);
    }
  }, [existingMenuItemImgUrl]);

  return (
    <>
      <span className="mt-5 font-semibold lg:text-lg">* Item </span>

      <div className="flex w-full flex-col items-center gap-7 py-2 sm:gap-3 md:flex-row">
        <div className="flex h-full w-full max-w-sm flex-col gap-1.5 text-xs">
          <Label
            htmlFor={`menuItems.${menuItemNo}.menuItemName`}
            className="text-xs lg:text-base"
          >
            Item Name
          </Label>
          <Input
            type="text"
            placeholder="Item Name"
            className="text-xs lg:text-base"
            {...register(`menuItems.${menuItemNo}.menuItemName`, {
              required: "This field is required",
            })}
          />
          <div className="h-4">
            {errors?.menuItems?.[menuItemNo]?.menuItemName && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.menuItems[menuItemNo].menuItemName.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex h-full w-full max-w-sm flex-col gap-1.5 text-xs">
          <Label
            htmlFor={`menuItems.${menuItemNo}.menuItemPrice`}
            className="text-xs lg:text-base"
          >
            Item Price
          </Label>
          <Input
            type="text"
            placeholder="Item Price"
            className="text-xs lg:text-base"
            {...register(`menuItems.${menuItemNo}.menuItemPrice`, {
              required: "This field is required",
            })}
          />
          <div className="h-4">
            {errors?.menuItems?.[menuItemNo]?.menuItemPrice && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.menuItems[menuItemNo].menuItemPrice.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col justify-center gap-2 text-xs md:w-fit md:text-base">
          <Label className="whitespace-nowrap text-xs lg:text-base">
            Item Image
          </Label>

          {menuItemImgUrl ? (
            <>
              <CldUploadWidget
                uploadPreset="food-cheetah"
                onSuccess={(res) => handleImageUpload(res.info.secure_url)}
              >
                {({ open }) => (
                  <div className="flex w-full cursor-pointer items-center justify-center border-2 border-dotted py-1">
                    <div
                      className="relative ml-4 h-20 w-32 text-lg text-primary"
                      onClick={() => open()}
                    >
                      <Image
                        src={menuItemImgUrl}
                        fill
                        alt="Menu Item Image"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                )}
              </CldUploadWidget>
            </>
          ) : (
            <>
              <CldUploadWidget
                uploadPreset="food-cheetah"
                onSuccess={(res) => handleImageUpload(res.info.secure_url)}
              >
                {({ open }) => (
                  <div
                    className="flex h-9 cursor-pointer items-center justify-center rounded-md border border-dotted border-gray-400"
                    onClick={() => open()}
                  >
                    <IoImageOutline className="text-lg text-primary md:text-2xl" />
                  </div>
                )}
              </CldUploadWidget>
              <input
                type="hidden"
                {...register(`menuItems.${menuItemNo}.menuItemImage`, {
                  required: "This field is required",
                })}
              />
              <div className="h-4">
                {errors?.menuItems?.[menuItemNo]?.menuItemImage && (
                  <span className="text-xs text-red-500 sm:text-sm">
                    {errors.menuItems[menuItemNo].menuItemImage.message}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        <Button
          variant="destructive"
          type="button"
          onClick={() => remove(menuItemNo)}
          className="h-9 w-fit"
          disabled={totalItems === 1}
        >
          <MdOutlineDeleteOutline className="mr-1 text-lg text-white" />
          Remove
        </Button>

        <hr className="mt-2 bg-gray-600" />
      </div>
    </>
  );
};

export default MenuItem;
