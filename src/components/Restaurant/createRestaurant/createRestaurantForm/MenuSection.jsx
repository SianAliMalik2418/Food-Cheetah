import { Button } from "@/components/ui/button";
import MenuItem from "../../restaurantUiComponents/MenuItem";
import { useFieldArray } from "react-hook-form";


const MenuSection = () => {
  const { fields, append, remove } = useFieldArray({
    name: "menuItems",
  });

  return (
    <>
      <h1 className="mt-14 text-xl font-bold lg:mb-2 lg:text-3xl">
        Menu Items
      </h1>
      <span className="text-xs lg:text-base">
        Create your menu and give each item a name, price and image.
      </span>

      <div className="flex w-full flex-col gap-3 text-sm">
        {fields?.map((field, index) => (
          <MenuItem
            key={field.id}
            menuItemNo={index}
            remove={remove}
            totalItems={fields.length}
          />
        ))}

        <Button
          type="button"
          className="w-fit bg-slate-800 text-white hover:bg-slate-900"
          onClick={() => append({ menuItemName: "", menuItemPrice: "" })}
        >
          Add Menu Item
        </Button>
      </div>

      <div className="mt-10">
        
      </div>
    </>
  );
};

export default MenuSection;
