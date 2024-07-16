import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const ButtonLoading = ({ className , loadingMessage = "Please wait" }) => {
  return (
    <Button disabled className={`text-white  ${className}`}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {loadingMessage}
    </Button>
  );
};
export default ButtonLoading;
