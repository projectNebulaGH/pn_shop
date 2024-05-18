'use client'

import Modal from "@/components/Modal/modal";
import { useState } from "react";

interface ProductFrameProps {
    name: string
}

export const ProductFrame = ({ name }: ProductFrameProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                className="
                bg-neumorphic-gradient text-light-grey px-4 py-1 mx-2 
                min-h-[8vh] w-[12vh] rounded-neumorphic font-medium 
                cursor-pointer shadow-neumorphic-light
                hover:shadow-neumorphic-hover
                active:shadow-neumorphic-active
                transition-shadow duration-200 ease-in-out
            "
                onClick={openModal}
            >
                {name}
            </button>
            {isModalOpen && (
                <Modal 
                closed={closeModal} 
                component={<ProductModalFrame name={name} />} />
            )}
        </div>
    );
};

export const ProductModalFrame = ({name}: ProductFrameProps) => {
    return (
        <div className="flex flex-col">
            <p className="text-primary text-4xl pt-[2vh] pb-[2vh]">{name}</p>
            <p className="text-light-grey text-lg font bold pt-[2vh] pb-[2vh] font-medium">{"Description"}</p>
        </div>
    )
}