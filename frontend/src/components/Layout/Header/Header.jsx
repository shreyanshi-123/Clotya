import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faHeart,
  // faShoppingCart,
  faAngleDown,
  faBars,
  faTimes,
  // faUser,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


import { faHeart,   faUser , fas} from '@fortawesome/free-regular-svg-icons';  // Import the regular user icon

import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Logo = `${process.env.REACT_APP_API_URL}/assets/images/logo-white.webp`;

// Menu Data
const menuItems = [
  {
    name: 'Shop',
    link: '#',
    megaMenu: [
      {
        title: 'Men',
        items: [
          'Jackets & Coats', 'Jeans', 'Loungewear', 'Polo shirts',
          'Shirts', 'Shorts', 'Suits', 'Swimwear',
          'T-shirts', 'Tracksuits', 'Trousers', 'Underwear',
        ],
      },
      {
        title: 'Women',
        items: [
          'Dresses', 'Jackets & Coats', 'Jeans', 'Lingerie',
          'Loungewear', 'Shorts', 'Skirts', 'Suits',
          'Swimwear', 'Top', 'Trousers',
        ],
      },
      {
        title: 'Other',
        items: [
          'Accessories', 'Bags', 'Belts', 'Hats',
          'Watches', 'Jewelry', 'Sale', 'Shoes',
          'Vintage', 'Designers', 'Lifestyle',
        ],
      },
    ],
  },
  {
    name: 'Category',
    link: '#',
    megaMenu: [
      {
        title: 'Gender',
        items: ['Men', 'Women'],
      },
      {
        title: 'Accessories',
        items: ['Shoes', 'Bags', 'Glasses', 'Jewelry'],
      },
    ],
  },
  {
    name: 'Men',
    link: '#',
    subItems: ['T-Shirts', 'Jeans', 'Shoes'],
  },
  {
    name: 'Women',
    link: '#',
    subItems: ['Dresses', 'Tops', 'Skirts'],
  },
];

const iconItems = [
  { icon: faUser, hover: 'hover:text-green-500', key: 'admin' },  // Admin Icon (Add this if it's missing)
  { icon: faSearch, hover: 'hover:text-gray-500', key: 'search' },  // Search Icon (Add this if it's missing)
  { icon: faHeart, hover: 'hover:text-red-500', key: 'wishlist' },  // Wishlist Icon
  { icon: faBagShopping, hover: 'hover:text-blue-500', key: 'cart' },  // Cart Icon
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Promo Bar */}
      

      {/* Navigation Bar */}
      <div className=" text-white absolute w-full">
      <div className="bg-black text-white text-[12px] text-center relative py-2.5">
        <div class="container  m-auto">
          <p className='text-[12px] uppercase tracking-[0.25px]'>SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <a href="/shop" className='font-semibold'>SHOP NOW</a></p>
        </div>
      </div>
        <div className="max-w-full px-4 sm:px-6 lg:px-[30px] flex items-center  relative ">
        <div className="border-b-[1px] border-primary-gray border-solid flex w-full justify-between h-[84px] items-center">
         {/* Left: Hamburger (Mobile) & Menu */}
          <div className="flex items-center ">
            <button
              className="text-white text-xl lg:hidden mr-4"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-6 items-center">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a href={item.link} className="uppercase flex items-center gap-1">
                    {item.name}
                    {(item.subItems || item.megaMenu) && (
                      <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                    )}
                  </a>

                  {/* Submenu Dropdown */}
                  {item.subItems && (
                    <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-2 z-50 min-w-[150px]">
                      {item.subItems.map((sub, i) => (
                        <a key={i} href="#" className="block px-3 py-1 hover:bg-gray-100 text-sm">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.megaMenu && (
                    <div className="absolute hidden group-hover:flex gap-10 bg-white text-black mt-4 p-6 rounded shadow-lg z-50">
                      {item.megaMenu.map((section, secIndex) => (
                        <div key={secIndex}>
                          <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
                          {(section.title === 'Men' || section.title === 'Women') ? (
                            <div className="grid grid-cols-3 gap-4">
                              {Array.from({ length: 3 }, (_, col) => (
                                <ul key={col} className="space-y-1 text-sm">
                                  {section.items
                                    .filter((_, i) => i % 3 === col)
                                    .map((item, idx) => (
                                      <li key={idx}>
                                        <a href="#" className="hover:text-blue-600">{item}</a>
                                      </li>
                                    ))}
                                </ul>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-1 text-sm">
                              {section.items.map((sub, subIdx) => (
                                <li key={subIdx}>
                                  <a href="#" className="hover:text-blue-600">{sub}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-[54%] transform -translate-x-1/2 z-10">
            <NavLink to="/" className="block w-auto">
              <LazyLoadImage
                src={Logo}
                alt="Clotya"
                width="121"
                className="header-logo"
              />
            </NavLink>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6">
            {iconItems.map(({ icon, hover, key }) => (
              <FontAwesomeIcon
                key={key}
                icon={icon}
                className={`text-white  cursor-pointer`}
                size="lg"
              />
            ))}
          </div>
        </div>
      </div>
</div>
      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="lg:hidden bg-gray-800 text-white px-4 py-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <p className="uppercase font-semibold mb-1">{item.name}</p>
                {item.subItems && (
                  <ul className="space-y-1 text-sm pl-2">
                    {item.subItems.map((sub, i) => (
                      <li key={i}><a href="#" className="block">{sub}</a></li>
                    ))}
                  </ul>
                )}
                {item.megaMenu && item.megaMenu.map((section, secIndex) => (
                  <div key={secIndex} className="pl-2 mb-2">
                    <p className="text-sm font-medium">{section.title}</p>
                    <ul className="text-sm space-y-1 pl-2">
                      {section.items.map((sub, j) => (
                        <li key={j}><a href="#" className="block">{sub}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
      }
    </header >
  );
};

export default Header;
