'use client'

import React from 'react';

interface CarouselFramesProps {
    frames: React.ReactNode[];
}

export const Carousel: React.FC<CarouselFramesProps> = ({ frames }) => {
    return (
        <div className="flex overflow-x-auto whitespace-nowrap my-[2vh]">
            {frames.map((frame, index) => (
                <div key={index} className="flex-none mr-4">
                    {frame}
                </div>
            ))}
        </div>
    );
}