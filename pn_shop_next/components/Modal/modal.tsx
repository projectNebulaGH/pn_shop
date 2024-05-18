'use client'

import React from "react";

interface ModalProps {
  closed: (text: boolean) => void;
  component: React.ReactNode; // Define the prop to accept a component
}

const Modal: React.FC<ModalProps> = ({ closed, component }: ModalProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="h-screen w-screen fixed" onClick={() => closed(true)}></div>
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          <div className="backdrop-blur-xl rounded-3xl shadow-lg relative flex flex-col w-full bg-base-color-alt/60 outline-none focus:outline-none max-h-[800px] overflow-y-scroll no-scrollbar">
            <div
              className="fixed right-3 top-3 hover:cursor-pointer"
              onClick={() => {
                closed(true);
              }}
            >
              <p className="text-light-grey text-3xl pt-[2vh] pb-[2vh] font-bold">{"X"}</p>
            </div>
            <div className="min-w-[40vw] min-h-[30vh] p-[2vw]">
              {component}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;