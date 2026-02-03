"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { actionFunction } from "@/utils/types";
import FormContainer from "./FormContainer";
import { SubmitButton } from "./Buttons";
import ImageInput from "./ImageInput";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text, children } = props;

  const [isUpdateFormVisible, setUpdateFormVisible] =
    useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-50 h-50"
        priority
      />

      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          setUpdateFormVisible((prev) => !prev)
        }
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            <ImageInput />
            <SubmitButton size="sm" text={text} />
            {children}
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
