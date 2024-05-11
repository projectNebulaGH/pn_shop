import React from "react";
import Image from "next/image";

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
          {/*content*/}
          <div className="backdrop-blur-xl rounded-3xl shadow-lg relative flex flex-col w-full bg-base-color-alt/60 outline-none focus:outline-none max-h-[800px] overflow-y-scroll no-scrollbar">
            
            <div
              className="fixed right-3 top-3 hover:cursor-pointer"
              onClick={() => {
                closed(true);
              }}
            >
              <Image
                src="/assets/logos/closemenu.svg"
                alt="Close Menu"
                height={25}
                width={25}
                className="h-[25px] v-[25px]"
              />
            </div>
            {/*body*/}
            <div className="min-w-[40vw] min-h-[30vh] p-[2vw]">
              {component} {/* Render the passed component */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;