import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

const InputWithLabel = ({
  labelName,
  registeryName,
  type,
  min,
  defaultValue,
  placeHolder,
}) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-xs">
      <Label htmlFor={labelName} className="text-xs lg:text-base">
        {labelName}
      </Label>
      <Input
        type={type || "text"}
        id={labelName}
        placeholder={placeHolder ? placeHolder : labelName}
        min={min && min}
        defaultValue={defaultValue && defaultValue}
        className="text-xs lg:text-base"
        {...register(registeryName, { required: "This field is required" })}
      />
      <div className="h-4">
        {errors[registeryName] && (
          <span className="text-xs text-red-500 sm:text-sm">
            {errors[registeryName].message}
          </span>
        )}
      </div>
    </div>
  );
};
export default InputWithLabel;
