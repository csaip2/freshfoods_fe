import React, { useState } from "react";
import { SiCodefresh } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "../helper/ResponsiveMenu";
import LoginForm from "../Forms/LoginForm";
import { Link } from "react-router-dom";

const Navbar = () => {
  const headerData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "/products" },
    { id: 3, title: "About", link: "/about" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container max-w-7xl mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
          {/* Mobile Hamburger Section */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl" />
          </div>

          {/* Logo Section */}
          <div className="text-xl lg:text-2xl flex items-center gap-2 font-bold uppercase">
            <SiCodefresh />
            <p className="text-black">Fresh</p>
            <p>Foods</p>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-6 text-gray-600">
              {headerData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="inline-block py-1 px-4 text-base lg:text-lg hover:text-primary font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <button className="text-xl lg:text-2xl hover:bg-primary hover:text-white active:bg-primary active:text-white rounded-full p-2 duration-200 touch-manipulation">
              <CiSearch />
            </button>
            <button className="text-xl lg:text-2xl hover:bg-primary hover:text-white active:bg-primary active:text-white rounded-full p-2 duration-200 touch-manipulation">
              <PiShoppingCartThin />
            </button>
            <button
              className="hover:bg-primary active:bg-primary text-dark font-semibold hover:text-white active:text-white rounded-md border-2 px-4 py-2 duration-200 touch-manipulation"
              onClick={() => setFormOpen(true)}
            >
              Login
            </button>
            <LoginForm formOpen={formOpen} onClose={() => setFormOpen(false)} />
          </div>
        </div>

        {/* Mobile Sidebar Section */}
        {open && (
          <ResponsiveMenu
            open={open}
            headerData={headerData}
            onClose={() => setOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
