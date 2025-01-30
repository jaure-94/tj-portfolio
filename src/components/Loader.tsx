import React from 'react';
import { Roller } from 'react-css-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-screen h-screen overflow-x-clip overflow-y-clip">
        <div className="flex flex-col gap-5">
            <div className="flex justify-center">
                <p className="text-2xl md:text-3xl font-bold">TJ THE DEVELOPER</p>
            </div>

            <div className="flex justify-center">
                <Roller
                    color="rgba(0,0,0,1)"
                    size={69}
                />
            </div>
        </div>
    </div>
  )
}

export default Loader