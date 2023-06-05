import React from "react";

const Cerificate1 = () => {
  return (
    <div className="h-full w-full p-40  bg-gray-300 flex justify-between font-Smooch   ">
      <div className=" text-black bg-white w-[641px] h-[453px] m-auto flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center px-28 py-20">
          <h1 className="text-5xl mb-3 font-abril">Certificate</h1>
          <h2 className="text-blue-400 font-bold font-mono tracking-widest mb-3">
            OF ACHIEVEMENT
          </h2>

          <div className="border-2 w-5 border-black mb-3 "></div>
          <p className="text-center mb-1">
            This certificate is proudly <br />
            presented for honourable achievment to:
          </p>
          <h1 className="text-5xl text-pink-600 border-b-2 font-smooch border-gray-500 pb-3 mb-5">
            john W. Doe
          </h1>
          <p className="text-center mb-5"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Deleniti nostrum molestiae inventore <br />
            voluptate aliquid quisqu
          </p>

          <div className="w-full flex justify-between">
            <div className="text-center">
              <h1 className="text-blue-400 font-smooch font-bold tracking-widest">Smith</h1>
              <h1 className="border-t-2 border-gray-500">Jane smith</h1>
              <p>Director</p>
            </div>
            <div className="text-center">
              <h1 className="text-blue-400 font-bold font-smooch tracking-widest">Smith</h1>
              <h1 className="border-t-2 border-gray-500">Jane smith</h1>
              <p className="p-0 m-0">Director</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cerificate1;
