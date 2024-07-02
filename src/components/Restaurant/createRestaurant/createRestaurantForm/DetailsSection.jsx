import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../../../ui/input";
import { useFormContext } from "react-hook-form";
import InputWithLabel from "../../restaurantUiComponents/InputWithLabel";

const DetailsSection = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <>
      <h1 className="text-xl font-bold lg:text-3xl">Details</h1>
      <span className="text-xs lg:text-base">
        Enter the details about your restaurant
      </span>
      <div className="mt-3 flex w-full flex-col gap-4 lg:mt-10 lg:text-lg">
        <InputWithLabel
          labelName={"Restaurant Name"}
          registeryName={"restaurantName"}
        />

        <div className="flex flex-col gap-5 sm:flex-row">
          <InputWithLabel labelName={"City"} registeryName={"city"} />

          <InputWithLabel labelName={"Country"} registeryName={"country"} />
        </div>

        <InputWithLabel
          labelName={"Delivery price (Rs)"}
          registeryName={"deliveryPrice"}
          type={"number"}
          defaultValue={50}
        />

        <InputWithLabel
          labelName={" Estimated Delivery Time (mins)"}
          registeryName={"deliveryTime"}
          placeHolder={"Estimated Delivery Time"}
        />
      </div>
    </>
  );
};
export default DetailsSection;
