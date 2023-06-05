import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsCalendar2Date, BsThreeDots } from "react-icons/bs";
import { ImPlus, ImCross } from "react-icons/im";
import { FaAngleDoubleUp, FaAngleRight } from "react-icons/fa";

function Audience() {
  return (
    <div className="h-full p-12  bg-white flex-1 border-2 border-gray-300 font-normal text-black">
      {/* nabvar start */}
      <div className="flex justify-between mb-12">
        <h1 className="text-2xl">Audience</h1>

        <div className="flex items-center text-gray-500 gap-4">
          <BsCalendar2Date />
          <p className="flex items-center gap-2 ">
            {" "}
            Dec 20,2021 - Jan 19,2022 <AiOutlineDown />
          </p>
          <p className="flex items-center gap-2">
            Weekly <AiOutlineDown />
          </p>
        </div>
      </div>
      {/* navbar end */}
      {/* graph start */}
      <div className="flex border-b-2 border-gray-300  mb-5 ">
        {/* left side  */}

        <div className="w-1/3 items-center">
          <h1 className="mb-3">New contacts</h1>
          <h1 className="text-4xl flex items-center gap-3">
            729
            <p className="flex items-center gap-1 bg-green-200 rounded-full py-1 px-2 relative top-1 ">
              27% <FaAngleDoubleUp className=" " />
            </p>
          </h1>
          <p className="text-gray-400  mb-20">From Dec 20 ,2022 to Jan 2022</p>
 
          <div className="flex mb-5 justify-between font-bold pr-24">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <label for="vehicle1"> 459 </label>
              <br />

              <p>Subscribed</p>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <label for="vehicle1"> 272 </label>
              <br />

              <p>Non-Subscribed</p>
            </div>
          </div>

          <p className="mb-5 flex gap-2 items-center text-indigo-700">
            {" "}
            Insights{" "}
            <FaAngleRight className="border-2 rounded-lg  border-indigo-700" />{" "}
          </p>
        </div>

        {/* right side  */}

        <div className=" bg-gray-500 w-2/3 mb-5 ">

          <div className="bg-gray-500 w-2/3 mb-5"> </div>
          
        </div>
      </div>
      {/* graph end */}
      {/* Contacts start */}
      <div className="">
        <h1>Contacts </h1>

        <div className="flex gap-5 my-5">
          <button className="flex gap-2 p-1 items-center border-2 border-gray-300 rounded-lg">
            Add Filter <ImPlus />
          </button>

          <button className="flex gap-2 p-1 items-center bg-gray-300 rounded-lg">
            Status is Subscribed <ImCross />
          </button>
          <button className="flex gap-2 p-1 items-center bg-gray-300 rounded-lg">
            Revenue is between $500 and $500 <ImCross />
          </button>
        </div>

        <div className="">
          <table className="table-fixed text-center text-sm justify-center w-full text-gray-400  my-10  ">
            <thead className="border-b-2 border-gray-300 pb-8 mb-8  ">
              <tr className=" py-7 my-7 text-black pb-8 mb-8">
              <th className="pb-5  w-10"> </th>
                <th className="flex items-center justify-center py-5 ">
                  {" "}
                  <input
                    className=" flex items-center justify-center py-5 w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                </th>
                <th className="pb-5 ">Full Name </th>
                <th className="pb-5 w-44">Email Adress </th>
                <th className="pb-5">Status </th>
                <th className="pb-5">Phone Number </th>
                <th className="pb-5">Revenue </th>
                <th className="pb-5"> Rating </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-medium">

                <td className="h-full flex text-black font-bold items-center justify-center py-5"><AiOutlineDown /></td>
                <td > <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input></td>
                <td className="py-5">jone copper</td>
                <td className="text-black  ">jonecopper@gmail.com</td>

               
                <td className="  ">
                  {" "}
                  <p className="bg-green-50 text-green-500 rounded-md py-1 ">
                    Subscribed 
                  </p>{" "}
                </td>
                <td>8085705849</td>
                <td>$456</td>
                <td className="text-green-700">1</td>
                <td className="h-full flex items-center justify-center py-5"><BsThreeDots className="w-5 h-5"/> </td>
                
              </tr>
              <tr className="font-medium">

                <td className="h-full flex text-black font-bold items-center justify-center py-5"><AiOutlineDown /></td>
                <td > <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input></td>
                <td className="py-5">jone copper</td>
                <td className="text-black  ">jonecopper@gmail.com</td>

               
                <td className="  ">
                  {" "}
                  <p className="bg-green-50 text-green-500 rounded-md py-1 ">
                    Subscribed 
                  </p>{" "}
                </td>
                <td>8085705849</td>
                <td>$456</td>
                <td className="text-green-700">1</td>
                <td className="h-full flex items-center justify-center py-5"><BsThreeDots className="w-5 h-5"/> </td>
                
              </tr>
              <tr className="font-medium">

                <td className="h-full flex text-black font-bold items-center justify-center py-5"><AiOutlineDown /></td>
                <td > <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input></td>
                <td className="py-5">jone copper</td>
                <td className="text-black  ">jonecopper@gmail.com</td>

               
                <td className="  ">
                  {" "}
                  <p className="bg-green-50 text-green-500 rounded-md py-1 ">
                    Subscribed 
                  </p>{" "}
                </td>
                <td>8085705849</td>
                <td>$456</td>
                <td className="text-green-700">1</td>
                <td className="h-full flex items-center justify-center py-5"><BsThreeDots className="w-5 h-5"/> </td>
                
              </tr>
              <tr className="font-medium">

                <td className="h-full flex text-black font-bold items-center justify-center py-5"><AiOutlineDown /></td>
                <td > <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input></td>
                <td className="py-5">jone copper</td>
                <td className="text-black  ">jonecopper@gmail.com</td>

               
                <td className="  ">
                  {" "}
                  <p className="bg-green-50 text-green-500 rounded-md py-1 ">
                    Subscribed 
                  </p>{" "}
                </td>
                <td>8085705849</td>
                <td>$456</td>
                <td className="text-green-700">1</td>
                <td className="h-full flex items-center justify-center py-5"><BsThreeDots className="w-5 h-5"/> </td>
                
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      {/* contact end */}
    </div>
  );
}

export default Audience;
