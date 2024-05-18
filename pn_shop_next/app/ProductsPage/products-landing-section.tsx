'use client'

import { Carousel } from "@/components/Carousel/carousel"
import { ProductFrame } from "@/app/ProductsPage/product-frame";
import implementationList from "@/data/products-implementation-list.json";
import inventoryList from "@/data/products-inventory-list.json";

export const ProductsLandingSection = () => {

    return (
        <div className="w-screen h-screen flex flex-col relative my-[5vh]">
            <div className="flex flex-col min-w-[90vw] px-[5vw] min-h-[35vh]">
                <p className="text-primary text-5xl">Products</p>
                <p className="text-light-grey text-xl pt-[2vh]">Made with care</p>
            </div>
            <div className="flex flex-col min-w-[90vw] min-h-[20vh]">
                <div className="px-[5vw]">
                    <p className="text-light-grey text-lg pt-[2vh] pb-[2vh] font-bold">Implementations</p>
                    <Carousel frames={implementationList.map((item) => <ProductFrame key={item.id} name={item.name} />)} />
                </div>
            </div>
            <div className="flex flex-col min-w-[90vw] min-h-[20vh] mt-[2vh]">
                <div className="px-[5vw]">
                    <p className="text-light-grey text-lg pt-[2vh] pb-[2vh] font-bold">Inventory</p>
                    <Carousel frames={inventoryList.map((item) => <ProductFrame key={item.id} name={item.name} />)} />
                </div>
            </div>
        </div>
    )
}