import React, { useState } from "react";
import { SiCodefresh } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./helper/ResponsiveMenu";

const Navbar = () => {
  const headerData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "/products" },
    { id: 3, title: "About", link: "/about" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/*Logo Section*/}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <SiCodefresh />
            <p className="text-black">Fresh</p>
            <p>Foods</p>
          </div>

          {/*Menu Section*/}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {headerData.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/*Icons Section*/}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch className="text-2xl" />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin className="text-2xl" />
            </button>
            <button className="hover:bg-primary text-dark font-semibold hover:text-white rounded-md border-2 px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/*Mobile Hamburger Section*/}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} headerData={headerData} />
    </>
  );
};

export default Navbar;
