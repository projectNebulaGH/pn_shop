'use client'

interface ProductFrameProps {
    name: string
}

export const ProductFrame = ({name}: ProductFrameProps) => {
    return (
        <button className="bg-base-color text-light-grey px-4 py-1 mx-2 rounded-md font-medium cursor-pointer">
            {name}
        </button>
    )
}