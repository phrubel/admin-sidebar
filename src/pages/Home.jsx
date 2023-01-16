import React from "react";
import {HiMenuAlt3} from "react-icons/hi"
const Home = () => {
  return (
    <section className="flex gap-6">
      <div className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100">
        <div className="py-3 flex justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Home;
