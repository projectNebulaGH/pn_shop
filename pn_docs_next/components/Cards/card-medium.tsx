import React from "react";
import Image from "next/image";

interface CardMediumProps {
  name: string; // Define the prop to accept a component
}

const CardMedium: React.FC<CardMediumProps> = ({ name }: CardMediumProps) => {
  return (
    <div className="flex flex-col mx-4 min-w-[10vw] m-h-[5vh]">
        <button className=" text-light-grey text-lg mt-[2vh]">
            {name} 
        </button>
    </div>
  );
};

export default CardMedium;