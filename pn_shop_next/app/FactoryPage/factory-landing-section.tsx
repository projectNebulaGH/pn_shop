'use client'

export const FactoryLandingSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify relative my-[5vh]">
      <div className="flex flex-col min-w-[90vw] px-[5vw] min-h-[35vh]">
        <p className="text-primary text-5xl">The Factory</p>
        <p className="text-light-grey text-xl mt-[2vh]">The first practical version...</p>
      </div>
      <div className="flex flex-col min-w-[90vw] min-h-[20vh] bg-base-color-alt">
          <div className="px-[5vw]">
              <p className="text-light-grey text-lg pt-[2vh] font-bold">Production Line</p>
          </div>
      </div>
      <div className="flex flex-col min-w-[90vw] min-h-[20vh] mt-[2vh] bg-base-color-alt">
          <div className="px-[5vw]">
              <p className="text-light-grey text-lg pt-[2vh] font-bold">Stack</p>
          </div>
      </div>
    </div>
)
};
