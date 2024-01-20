import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="flex flex-col sm:flex-row justify-between pt-3 mx-6">
        <div className="flex items-center hover:cursor-pointer">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-2xl font-bold ">ZappFood</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="mt-1 p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          />
        </div>
      </div>
      <h3 className="text-1g text-gray-600 mx-6 mb-6">
        Exploring the Most Delectable Delicacies from Home to Heart."
      </h3>
    </nav>
  );
};

export default Navbar;
