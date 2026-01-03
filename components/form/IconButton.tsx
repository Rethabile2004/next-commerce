"use client";

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useFormStatus } from "react-dom";

type ActionType = "edit" | "delete";

type IconButtonProps = {
  actionType: ActionType;
};

const IconButton = ({ actionType }: IconButtonProps) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <MdEdit className="h-4 w-4" />;

      case "delete":
        return <RiDeleteBack2Fill className="h-4 w-4" />;

      default: {
        const neverType: never = actionType;
        throw new Error(`Invalid action type: ${neverType}`);
      }
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : (
        renderIcon()
      )}
    </Button>
  );
};

export default IconButton;
