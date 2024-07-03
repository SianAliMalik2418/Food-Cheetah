"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";

const ImageSection = () => {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();

  const existingImageUrl = watch("coverImg");

  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    if (existingImageUrl) {
      setCoverImage(existingImageUrl);
    }
  }, [existingImageUrl]);

  const handleFileUpload = (url) => {
    setCoverImage(url);
    setValue("coverImg", url, {
      shouldValidate: true,
    });
  };

  return (
    <>
      <h1 className="mt-20 text-xl font-bold lg:mb-2 lg:text-3xl">
        Cover Image
      </h1>
      <span className="text-xs lg:text-base">
        This will be your Restaurant Cover Image. Adding a new one will replace
        the existing one.
      </span>
      {errors?.coverImg && (
        <div className="text-red-500">{errors?.coverImg?.message}</div>
      )}

      {coverImage ? (
        <CldUploadWidget
          uploadPreset="food-cheetah"
          onSuccess={(res, { widget }) => {
            handleFileUpload(res?.info?.secure_url);
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div
                className="my-10 flex h-[10rem] w-full items-center justify-center md:h-[15rem] lg:h-[17rem]"
                onClick={() => open()}
              >
                <div className="relative flex h-full w-1/2 cursor-pointer items-center justify-center border-4 border-dotted">
                  <Image
                    src={coverImage}
                    fill
                    alt="Cover Image"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            );
          }}
        </CldUploadWidget>
      ) : (
        <>
          <CldUploadWidget
            uploadPreset="food-cheetah"
            onSuccess={(res, { widget }) => {
              handleFileUpload(res?.info?.secure_url);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="my-10 flex h-[10rem] w-full cursor-pointer items-center justify-center md:h-[15rem] lg:h-[17rem]"
                  onClick={() => open()}
                >
                  <div className="flex h-full w-2/3 items-center justify-center border-4 border-dotted">
                    <BiImageAdd className="text-5xl text-primary md:text-7xl" />
                  </div>
                </div>
              );
            }}
          </CldUploadWidget>

          <input
            type="hidden"
            {...register("coverImg", { required: "This field is required" })}
          />
        </>
      )}
    </>
  );
};

export default ImageSection;
