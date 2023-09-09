import React from "react";
import {Input} from "@nextui-org/react";

export default function InputCase({type, label, placeholder}) {

  return (
    <div className="w-full md:w-1/3 mb-6 mx-auto flex flex-col gap-4">
          <Input className="border-b-[1px] border-r-[1px]" type={type} label={label} placeholder={placeholder} />
    </div>  
  );
}

