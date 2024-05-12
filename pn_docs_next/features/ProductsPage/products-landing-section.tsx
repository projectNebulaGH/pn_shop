import ProductsImplementationCarousel from "./products-implementation-carousel"
import { ProductsInventoryCarousel } from "./products-inventory-carousel"

export const ProductsLandingSection = () => {
    return (
        <div className="w-screen h-screen flex flex-col relative mx-[5vw] my-[5vh]">
            <div className="flex flex-col min-w-[90vw] min-h-[35vh]">
                <p className="text-primary text-4xl">Products</p>
                <p className="text-light-grey text-xl pt-[2vh]">Made with care</p>
            </div>

            <div className="flex min-w-[90vw] pt-[5vh]">
                <ProductsImplementationCarousel />
            </div>
            <div className="flex min-w-[90vw] pt-[10vh]">
                <ProductsInventoryCarousel />
            </div>
        </div>
    )
}