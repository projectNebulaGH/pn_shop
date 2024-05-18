'use client'

import { Carousel } from "@/components/Carousel/carousel";
import { FactoryFrame } from "@/app/FactoryPage/factory-frame";

import productionLineList from "@/data/factory-production-line-list.json";
import stackList from "@/data/factory-stack-list.json";

export const FactoryLandingSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative my-[5vh]">
            <div className="flex flex-col min-w-[90vw] px-[5vw] min-h-[25vh]">
                <p className="text-primary text-5xl">Factory</p>
                <p className="text-light-grey text-xl pt-[2vh]">The first working version!</p>
            </div>
            <div className="flex flex-col min-w-[90vw] min-h-[20vh]">
                <div className="px-[5vw]">
                    <p className="text-light-grey text-lg pt-[2vh] pb-[5vh]">Production Line</p>
                    <Carousel frames={productionLineList.map((item) => <FactoryFrame key={item.id} name={item.name} />)} />
                </div>
            </div>
            <div className="flex flex-col min-w-[90vw] min-h-[20vh] mt-[2vh]">
                <div className="px-[5vw]">
                    <p className="text-light-grey text-lg pt-[2vh] pb-[5vh]">Stack</p>
                    <Carousel frames={stackList.map((item) => <FactoryFrame key={item.id} name={item.name} />)} />
                </div>
            </div>
        </div>
)
};
