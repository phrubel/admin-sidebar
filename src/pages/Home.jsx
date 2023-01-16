import React, { useState } from 'react';
import { HiMenuAlt3, HiUsers } from 'react-icons/hi';
import {
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import {
  AiOutlineStock,
  AiOutlineFileProtect,
  AiFillCompass,
  AiOutlineLogout,
} from 'react-icons/ai';
import { BsClipboardCheck, BsCompassFill } from 'react-icons/bs';
import { FaClipboardCheck } from 'react-icons/fa';
import { GiTatteredBanner } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Home = () => {
  const menus = [
    { name: 'DashBoard', icon: MdOutlineDashboardCustomize, link: '/' },
    { name: 'User', icon: HiUsers, link: '/' },
    { name: 'All Products', icon: MdProductionQuantityLimits, link: '/' },
    { name: 'Add Products', icon: AiOutlineFileProtect, link: '/' },
    { name: 'Stock Out', icon: AiOutlineStock, link: '/' },
    { name: 'Stock Out Com', icon: AiFillCompass, link: '/' },
    { name: 'All Order', icon: BsClipboardCheck, link: '/' },
    { name: 'Complete Order', icon: FaClipboardCheck, link: '/' },
    { name: 'Add Company', icon: BsCompassFill, link: '/' },
    { name: 'Add Banner', icon: GiTatteredBanner, link: '/' },
    { name: 'Logout', icon: AiOutlineLogout, link: '/' },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-black min-h-screen ${
          open ? 'w-80' : 'w-16'
        } duration-300 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className="flex gap-3 items-center text-sm font-medium p-2 hover:bg-gray-400 rounded-md transition duration-200 group "
            >
              <div>{React.createElement(menu?.icon, { size: '20px' })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-black font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl font-semibold">Admin Navbar!!</div>
    </section>
  );
};

export default Home;
