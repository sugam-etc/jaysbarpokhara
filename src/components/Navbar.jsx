import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
import { getExhibitionsForNav } from "../api/WhatsonService";
const MobileNavLink = ({ onClick, href, children, className = "" }) => (
  <a
    onClick={onClick}
    href={href}
    className={`block py-2 px-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-md transition-colors ${className}`}
  >
    {children}
  </a>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await getExhibitionsForNav();
        setExhibitions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch exhibitions:", error);
        setLoading(false);
      }
    };

    fetchExhibitions();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Navigation items configuration
  const navItems = [
    {
      type: "link",
      label: "Our Venue",
      path: "/venue",
    },
    {
      type: "link",
      label: "Our Gallery",
      path: "/gallery",
    },
    {
      type: "link",
      label: "Food & Drink",
      path: "/food-drinks",
    },
    {
      type: "dropdown",
      label: "Your Events",
      name: "events",
      items: [
        { label: "Kids & Family", path: "/events/kids-family" },
        { label: "Hen & Stag", path: "/events/henstag" },
        { label: "After Hours", path: "/events/afterwork" },
        { label: "Groups", path: "/events/groups" },
        {
          label: "Corporate Bookings & Private Hire",
          path: "/events/private-booking",
        },
        { label: "Ladies Night", path: "/events/ladiesnight" },
      ],
    },
    {
      type: "dropdown",
      label: "What's on",
      name: "whatsOn",
      items: loading
        ? [{ label: "Loading...", path: "#" }]
        : exhibitions.map((exhibition) => ({
            label: exhibition.navTitle,
            path: `/whats-on/${exhibition._id}`,
          })),
    },
    {
      type: "dropdown",
      label: "Parties",
      name: "parties",
      items: [
        { label: "Birthday Parties", path: "/parties" },
        { label: "Anniversary Celebrations", path: "/parties" },
        { label: "Team Building Events", path: "/parties" },
        { label: "Holiday Parties", path: "/parties" },
        { label: "Custom Party Packages", path: "/parties" },
      ],
    },
  ];

  const bottomLinks = [
    { label: "My Account", path: "#" },
    { label: "FAQ", path: "#" },
    { label: "Contact us", path: "#" },
  ];

  // SVG Icons
  const HamburgerIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

  const CloseIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );

  const ChevronDownIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  const ChevronUpIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50 font-inter transition-colors duration-300 bg-white bg-opacity-75 shadow-md`}
    >
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-gray-800 hover:text-gray-600 focus:outline-none p-2 rounded-md transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <CloseIcon size={24} /> : <HamburgerIcon size={24} />}
      </button>

      {/* Logo */}
      <Link
        className="flex items-center justify-center md:flex-grow md:text-center"
        to={"/"}
      >
        <img
          className="h-8 md:h-10 cursor-pointer transition-all duration-200 hover:opacity-90"
          src={logo}
          alt="Company Logo"
        />
      </Link>

      {/* Book Now Button */}
      <Link
        to={"/bookingpage"}
        className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        Book Now
      </Link>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-full md:w-80`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-gray-600 focus:outline-none p-2 rounded-md transition-colors"
            aria-label="Close navigation menu"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        <ul className="p-4 space-y-4 overflow-y-auto h-[calc(100%-65px)]">
          {/* Mobile Book Now Button */}
          <li className="md:hidden">
            <Link
              to={"/bookingpage"}
              className="w-full bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-lg font-medium"
            >
              Book Now
            </Link>
          </li>

          {/* Render navigation items */}
          {navItems.map((item, index) => {
            if (item.type === "link") {
              return (
                <MobileNavLink
                  key={index}
                  onClick={toggleMenu}
                  href={item.path}
                >
                  {item.label}
                </MobileNavLink>
              );
            } else if (item.type === "dropdown") {
              return (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between py-2 px-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                    {openDropdown === item.name ? (
                      <ChevronUpIcon size={20} />
                    ) : (
                      <ChevronDownIcon size={20} />
                    )}
                  </button>
                  {openDropdown === item.name && (
                    <ul className="pl-6 pt-2 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <MobileNavLink
                          key={subIndex}
                          onClick={toggleMenu}
                          href={subItem.path}
                        >
                          {subItem.label}
                        </MobileNavLink>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
            return null;
          })}

          <hr className="my-4 border-gray-200" />

          {/* Bottom Links */}
          <li className="flex justify-around items-center text-sm">
            {bottomLinks.map((link, index) => (
              <>
                <MobileNavLink
                  key={index}
                  onClick={toggleMenu}
                  href={link.path}
                  className="!text-sm !px-0 !py-0"
                >
                  {link.label}
                </MobileNavLink>
                {index < bottomLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};
