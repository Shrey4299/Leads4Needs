import React from "react";
import {
  AiFillHeart,
  AiOutlineRight,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt, BiSearchAlt } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";

const OrdersDetail = () => {
  return (
    <div className="h-full p-7 bg-white flex-1 border-2 border-gray-300 font-normal text-black ">
      {/* Hero section */}

      <div className="mb-14">
        <div className="flex justify-between mb-7 ">
          <h1 className="flex text-lg gap-2 items-center  ">
            Order Details <AiFillQuestionCircle className="text-gray-300" />
          </h1>
          <div className="flex gap-2 items-center">
            <button className="p-2 border-2 font-bold rounded-md text-gray-400 border-gray-300 hover:border-blue-700 hover:text-blue-700">
              Open Document
            </button>

            <button className="p-2 border-2 font-bold rounded-md text-gray-400 border-gray-300 hover:border-blue-700 hover:text-blue-700">
              Setup Deatil
            </button>
            <BsThreeDots className="p-2 border-2 font-bold rounded-md text-gray-400 border-gray-300 w-10 h-10 hover:border-blue-700 hover:text-blue-700" />
          </div>
        </div>
        <div className="text-gray-400">
          <p className="text-gray-400">
            In the order details section, you can review and manage all orders
            with their details. You can view and edit many information such as
            IDs of all orders, ordered product order date price and order
            status. Access to this area is limited Onlv administrators and team
            leaders can reach. The chandes vol make will he approved after they
            are checked.
          </p>
        </div>
      </div>

      {/* navbar */}

      <div className="border-b-2 border-gray-300 text-gray-400 mb-10">
        <ul className="flex gap-5 text-gray-400 font-bold text-md">
          <li className="text-gray-400 font-bold text-md hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
            All Orders
          </li>
          <li className="text-gray-400 font-bold text-md hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
            Completed
          </li>
          <li className="text-gray-400 font-bold text-md hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
            Continuing
          </li>
          <li className="text-gray-400 font-bold text-md hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
            Restitute
          </li>
          <li className="text-gray-400 font-bold text-md hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
            Canceled
          </li>
        </ul>
      </div>

      <div className="p-2 bg-gray-100 flex gap-10 mb-7">
        <div className="flex items-center gap-3 w-3/4 bg-white p-2 border-2  border-gray-300 rounded-md">
          <BiSearchAlt className="text-gray-400 " />
          <input
            className="w-full border-white text-sm"
            type="text"
            placeholder="Search for order Id ,Customer ,order Status or something..."
          />
        </div>

        <div className="cn">
          {/* <button className="p-2 flex items-center bg-white rounded-md  border-2 text-sm gap-2 text-gray-400 border-gray-300 hover:border-blue-700 hover:text-blue-700">      */}

          <div class="dropdown">
            <button class="dropbtn flex  items-center gap-3">
              {" "}
              <BsFilter /> Filter
            </button>
            <div class="dropdown-content p-7">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                className="mr-4"
                defaultValue="Bike"
              />
              <label htmlFor="vehicle1"> Company</label>
              <br />
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                className="mr-4"
                defaultValue="Car"
              />
              <label htmlFor="vehicle2"> Country</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                className="mr-4"
                defaultValue="Boat"
              />
              <label htmlFor="vehicle3"> Value</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                className="mr-4"
                defaultValue="Boat"
              />
              <label htmlFor="vehicle3"> Date</label>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* chart section */}

      <div className="mb-7">
        <table className="table-fixed text-center text-sm justify-center w-full text-gray-400   ">
          <thead className="border-b-2 border-gray-300 pb-8 mb-8  ">
            <tr className=" py-7 my-7 text-black pb-8 mb-8">
              <th className="pb-5 ">Order ID</th>
              <th className="pb-5">What is your hobby?</th>
              <th className="pb-5">Delivery Date</th>
              <th className="pb-5">Delivery Pricing</th>
              <th className="pb-5">Delivery Status</th>
              <th className="pb-5">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Football</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-green-100 text-green-500 rounded-md py-1 ">
                  Completed
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-red-50 text-red-500 rounded-md py-1 ">
                  Cancelled
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-blue-50 text-blue-500 rounded-md py-1 ">
                  Continue
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="py-5">AKN12508</td>
              <td className="text-black  ">Oliver Nules</td>

              <td>12.04.2021</td>
              <td className="text-black">$24,90</td>
              <td className="  ">
                {" "}
                <p className="bg-yellow-50 text-yellow-500 rounded-md py-1 ">
                  Restitute
                </p>{" "}
              </td>
              <td>Credit Card</td>
              <td className="h-full flex items-center justify-center py-5">
                <GiNotebook className="text-black w-5 h-5 " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between rounded-lg text-gray-400 bg-gray-200 p-3">
        <p>1-11 of 1200 pages</p>
        <div className="flex gap-3">
          <p>The page you are on</p>
          <select className="text-black" name="cars" id="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button className="bg-white p-1 text-black mx-2">
             <BiLeftArrowAlt />
          </button>
          <button  className="bg-white p-1 text-black mx-2">
          <BiRightArrowAlt />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;
