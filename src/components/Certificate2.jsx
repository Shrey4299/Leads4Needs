import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Certificate2 = () => {
  return (
    <div className="h-full w-full p-40  bg-gray-300 flex justify-between font-Smooch   ">
      <div className=" text-black bg-white w-[641px] h-[500px] m-auto overflow-hidden  ">

      <div className="text-indigo-700  grid grid-cols-10 text-xs gap-1 float-right relative top-[30px] right-12 z-10  ">
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
            </div>
      <div className="text-indigo-700 grid grid-cols-10 text-xs gap-1 float-left relative top-[415px] left-8 z-10 ">
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot/>
            </div>
            

            <div className="h-60 w-60 bg-yellow-50 rounded-full  relative right-40 top-10  "></div>
            <div className="h-80 w-60 bg-purple-200 rounded-full relative left-[500px] bottom-[320px]   "></div>
            <div className="h-80 w-60 bg-green-200 rounded-full relative right-[150px] bottom-[220px] rotate-90 "> </div>
        {/* <div className="w-full absulte z-10 flex justify-between"> 

        </div> */}

        <div className=" m-12 p-12 text-center shadow-lg felx flex-col items-center justify-between relative bottom-[880px]  z-10">

          
          <div className="flex justify-center">

            
          <img className="w-20 h-auto" src="data:image/png;base64,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" alt="" />
          </div>
          <h1 className="text-xl font-abril font-medium my-3 text-gray-800">Certificate Of Completion</h1>

          <h1 className="font-medium font-mono text-4xl text-gray-700    mb-8">Alexander Smith</h1>
          <h3 className="text-gray-500 mb-5">FullStack Web Development</h3>
          <p className="mb-7">January 10,2022</p>
          <div className="flex justify-center">

            
            <div className="text-center ">
              <h1 className="text-blue-400 font-smooch tracking-widest">Smith</h1>
              <h1 className="border-t-2 border-gray-500">Arial Campus</h1>
              <p className="font-medium">Executive Director</p>
            </div>
            {/* <div className="cn">
              <img src="" alt="" />
              <h2 className="  border-indigo-700 rounded-full text-xs"> FullStack Web  <br /> Development</h2>
              ID 1891027767
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate2;
