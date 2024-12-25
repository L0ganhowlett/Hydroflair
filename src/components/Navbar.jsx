import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSubDropdown = () => {
    setSubDropdownOpen(!subDropdownOpen);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
    setSubDropdownOpen(false);
  };

  return (
    <nav 
      className="bg-slate-50 sticky top-0 z-50 py-3 text-black shadow-md" 
      onMouseLeave={handleMouseLeave}
    >
      <div className="container px-4 mx-auto relative lg:text-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 p-1">
            <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative px-4 py-2">
                <Link
                  to={item.href}
                  onMouseEnter={item.label === "Products" ? toggleDropdown : null}
                  className="uppercase hover:font-bold"
                >
                  {item.label}
                </Link>
                {item.label === "Products" && dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-10">
                    <h4 className="uppercase font-bold text-blue-900 mb-2">Product Type</h4>
                    <ul>
                      {item.dropdown.productType.map((dropdownItem, subIndex) => (
                        <li key={subIndex} className="py-2 relative">
                          <Link
                            to={dropdownItem.href}
                            className="block hover:font-bold"
                            onMouseEnter={dropdownItem.label === "Domestic Range" ? toggleSubDropdown : null}
                          >
                            {dropdownItem.label}
                          </Link>
                          {dropdownItem.label === "Domestic Range" && subDropdownOpen && (
                            <div className="absolute left-full top-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-10">
                              <h4 className="uppercase font-bold text-blue-900 mb-2">Domestic Type</h4>
                              <ul>
                                {dropdownItem.dropdown.domesticType.map((subDropdownItem, subSubIndex) => (
                                  <li key={subSubIndex} className="py-2">
                                    <Link
                                      to={subDropdownItem.href}
                                      className="block hover:font-bold"
                                    >
                                      {subDropdownItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="relative px-4 py-2">
              <Link
                to="#AboutUs"
                className="uppercase hover:font-bold"
              >
                About Us
              </Link>
            </li>
            <li className="relative px-4 py-2">
              <Link
                to="#ContactUs"
                className="uppercase hover:font-bold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center text-white">
            <a
              href="tel:+919082603243"
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md uppercase shadow-lg"
            >
              Call us at +919082603243
            </a>
            <a
              href="mailto:hydro@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-teal-800 py-2 px-3 rounded-md uppercase shadow-lg"
            >
              Mail us at hydro@gmail.com
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-slate-50 shadow-lg z-20 p-4">
            {/* Add mobile drawer content here */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
