'use client'

interface ProductFrameProps {
    name: string
}

export const ProductFrame = ({name}: ProductFrameProps) => {
    return (
        <button className="
            bg-neumorphic-gradient text-light-grey px-4 py-1 mx-2 
            min-h-[8vh] w-[12vh] rounded-neumorphic font-medium 
            cursor-pointer shadow-neumorphic-light
            hover:shadow-neumorphic-hover
            active:shadow-neumorphic-active
            transition-shadow duration-200 ease-in-out
        ">
            {name}
        </button>
    )
}