import React, { useRef, useState, useEffect } from "react";
import CardMedium from "@/components/Cards/card-medium";
import productsImplementationList from "@/data/products-implementation-list.json";

export const ProductsImplementationCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number>(3); // Number of visible items

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth >= 768 ? 3 : 1); // Adjust based on breakpoint
    };

    handleResize(); // Call it once to set initial state of visible items

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-light-grey text-lg pt-2">Implementations</p>
      <div className="flex pt-5 relative">
        {visibleItems === 3 && (
          <button
            className="absolute top-[50%] left-0 transform -translate-y-1/2 bg-white p-2"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
        )}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto"
          ref={carouselRef}
          style={{
            scrollSnapType: "x mandatory", // Snap to each item on scroll
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
            paddingRight: visibleItems === 3 ? "50px" : "0", // Adjust paddingRight when scroll buttons are visible
          }}
        >
          {productsImplementationList.map((item, index) => (
            <div key={index} style={{ display: index < visibleItems ? 'block' : 'none' }}>
              <CardMedium name={item.name} />
            </div>
          ))}
        </div>
        {visibleItems === 3 && (
          <button
            className="absolute top-[50%] right-0 transform -translate-y-1/2 bg-white p-2"
            onClick={scrollRight}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsImplementationCarousel;
