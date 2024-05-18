'use client'

import Modal from "@/components/Modal/modal";
import { useState } from "react";

interface FactoryFrameProps {
    name: string
}

export const FactoryFrame = ({ name }: FactoryFrameProps) => {
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
                bg-neumorphic-gradient text-light-grey px-4 
                min-h-[10vh] w-[15vh] md:min-h-[15vh] md:w-[20vh] rounded-neumorphic font-medium 
                cursor-pointer shadow-neumorphic-light
                hover:shadow-neumorphic-hover hover:border-2 hover:border-primary
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
                component={<FactoryModalFrame name={name} />} />
            )}
        </div>
    );
}

export const FactoryModalFrame = ({ name }: FactoryFrameProps) => {
    return (
        <div className="flex flex-col">
            <p className="text-primary text-4xl pt-[2vh] pb-[2vh]">{name}</p>
            <p className="text-light-grey text-lg font bold pt-[2vh] pb-[2vh] font-medium">{"Description"}</p>
        </div>
    )
}