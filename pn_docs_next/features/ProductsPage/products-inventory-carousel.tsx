import CardMedium from "@/components/Cards/card-medium"
import productsInventoryList from "@/data/products-inventory-list.json"
export const ProductsInventoryCarousel = () => {
    return(
        <div className="flex flex-col">
            <p className="text-light-grey text-lg pt-[2vh]">Inventory</p>
            <div className="flex pt-[5vh]"> 
                {productsInventoryList.map((item) => (
                    <CardMedium key={item.id} name={item.name} />
                ))}
            </div>

        </div>
    )
}