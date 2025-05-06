import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import SideMenu from './SideMenu'
import SliderItem from './slider'
import {
  // faHeart,
  // faShoppingCart,
  faAngleDown,
  faBars,
  faTimes,
  // faUser,
  faSearch,
  faChartBar,
  faBarChart,
  faShoppingBag

} from '@fortawesome/free-solid-svg-icons';
import { faBagShopping, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Header.css'
import { faHeart, faUser, fas } from '@fortawesome/free-regular-svg-icons';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';

const Logo = `${process.env.REACT_APP_API_URL}/assets/images/logo-white.webp`;
const Category1 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/accessories-women-cat.jpg`;
const Category2 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/accessories-men-cat.jpg`;
const Category3 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/shoes-cat.jpg`;
const Category4 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/bag-cat.jpg`;
const Category5 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/glasses-cat.jpg`;
const Category6 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/jewelry-cat.jpg`;
const MenMegaMenu = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-1.jpg`;
const MenMegaMenu1 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-3.jpg`;
const MenMegaMenu2 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-4.jpg`;
const MenMegaMenu3 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-44.jpg`;
const MenMegaMenu4 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-45.jpg`;
const MenMegaMenu5 = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/megamenu-2.jpg`;
const arrow = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/arrow-right.png`;



// Menu Data

const row1 = [
  {
    id: 1,
    item: 'Jackets & Coats'

  },
  {
    id: 2,
    item: 'Jeans'

  },
  {
    id: 3,
    item: 'Loungewear'

  },
  {
    id: 4,
    item: 'Polo shirts'

  },
  {
    id: 5,
    item: 'shirts'

  },
  {
    id: 6,
    item: 'Shorts'

  }
]
const row2 = [
  {
    id: 1,
    item: 'Suits'

  },
  {
    id: 2,
    item: 'Swimwear'

  },
  {
    id: 3,
    item: 'T-shirts'

  },
  {
    id: 4,
    item: 'Tracksuits'

  },
  {
    id: 5,
    item: 'Trousers'

  },
  {
    id: 6,
    item: 'Underwear'

  }
]


const row11 = [
  {
    id: 1,
    item: 'Dresses'

  },
  {
    id: 2,
    item: 'Jackets & Coats'

  },
  {
    id: 3,
    item: 'Jeans'

  },
  {
    id: 4,
    item: 'Loungewear'

  }
]
const row22 = [
  {
    id: 1,
    item: 'Shorts'

  },
  {
    id: 2,
    item: 'Skirts'

  },
  {
    id: 3,
    item: 'Suits'

  },
  {
    id: 4,
    item: 'Swimwear'

  },
  {
    id: 5,
    item: 'Top'

  },
  {
    id: 6,
    item: 'Trousers'

  }
]


const row111 = [
  {
    id: 1,
    item: 'Accessories'

  },
  {
    id: 2,
    item: 'Bags'

  },
  {
    id: 3,
    item: 'Belts'

  },
  {
    id: 4,
    item: 'Hats'

  },
  {
    id: 5,
    item: 'Watches'

  }
]
const row222 = [
  {
    id: 1,
    item: 'Jewelry'

  },
  {
    id: 2,
    item: 'Sale'

  },
  {
    id: 3,
    item: 'Vintage'

  },
  {
    id: 4,
    item: 'Designers'

  },
  {
    id: 5,
    item: 'Lifestyle'

  }
]
const category = [
  {
    id: 1,
    item: 'Women'

  },
  {
    id: 2,
    item: 'Men'

  },
  {
    id: 3,
    item: 'Shoes'

  },
  {
    id: 4,
    item: 'Bags'

  },
  {
    id: 5,
    item: 'Glasses'

  },
  {
    id: 6,
    item: 'Jwellry'

  }
]

const iconItems = [
  { icon: faUser, hover: 'hover:text-green-500', key: 'admin' },
  { icon: faSearch, hover: 'hover:text-gray-500', key: 'search' },
  { icon: faHeart, hover: 'hover:text-red-500', key: 'wishlist' },


];

// const iconItemsLast  = [

//   { icon: faBagShopping, hover: 'hover:text-blue-500', key: 'cart' },

// ];


const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  // This controls the menu's visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="max-w-7xxl mx-auto px-[15px]  flex items-center header-wrapper ">
          <div className="border-b-[1px] border-primary-gray border-solid flex w-full justify-between  items-center main-header ">
            {/* Left: Hamburger (Mobile) & Menu */}
            <div className="flex items-center ">
              {/* Mobile Menu Button */}
              <button
                className="text-white text-xl lg:hidden mr-4 relative"
                onClick={() => setMenuOpen(!menuOpen)}  // Toggle menu visibility
              >
                {/* Font Awesome icon changes based on menuOpen state */}
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-black" />
              </button>
              <div className={`dropdown-menu   left-0 ${menuOpen ? 'open' : ''}`}>
                <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                  <div className="flex px-[24px] pt-[20px] pb-[12px]">
                    <NavLink to="/" className="block w-auto">
                      <LazyLoadImage
                        src={Logo}
                        alt="Clotya"
                        // width="121"
                        className="invert"
                      />
                    </NavLink>
                    <button
                      className="text-black text-xl  mr-4 relative text-end w-full"
                      onClick={() => setMenuOpen(false)}  // Toggle menu visibility
                    >
                      {/* Font Awesome icon changes based on menuOpen state */}
                      <FontAwesomeIcon icon={faTimes} className="text-black" />
                    </button></div>
                  <div className="px-[24px] py-[12px]">
                    {/* <Accordion defaultActiveKey="0"> */}
                    {/* <ul> */}
                    <Accordion defaultActiveKey="0">
  {/* Shop Section */}
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <h3 className="hover:text-primary-red text-[16px] py-[8px]">
        Shop 
      </h3>
    </Accordion.Header>
    <Accordion.Body>
      <Accordion >
        {/* Men Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="hover:text-primary-red text-[16px] py-[8px]">
              Men
            </h3>
          </Accordion.Header>
          <Accordion.Body>
           
              {row1.concat(row2).map(({ id, item }) => (
                <li key={id}>{item}</li>
              ))}
            
          </Accordion.Body>
        </Accordion.Item>

        {/* Women Section */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="hover:text-primary-red text-[16px] py-[8px]">
              Women 
            </h3>
          </Accordion.Header>
          <Accordion.Body>
           
              {row11.concat(row22).map(({ id, item }) => (
                <li key={id}>{item}</li>
              ))}
           
          </Accordion.Body>
        </Accordion.Item>

        {/* Others Section */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 className="hover:text-primary-red text-[16px] py-[8px]">
              Others 
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            
              {row111.concat(row222).map(({ id, item }) => (
                <li key={id}>{item}</li>
              ))}
           
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Accordion.Body>
  </Accordion.Item>

  {/* Category Section */}
  <Accordion.Item eventKey="4">
    <Accordion.Header>
      <h3 className="hover:text-primary-red text-[16px] py-[8px]">
        Category 
      </h3>
    </Accordion.Header>
    <Accordion.Body>
      
        {category.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      
    </Accordion.Body>
  </Accordion.Item>

  {/* Repeating Men, Women Sections */}
  <Accordion.Item eventKey="5">
    <Accordion.Header>
      <h3 className="hover:text-primary-red text-[16px] py-[8px]">
        Men 
      </h3>
    </Accordion.Header>
    <Accordion.Body>
      
        {category.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>
      <h3 className="hover:text-primary-red text-[16px] py-[8px]">
        Women 
      </h3>
    </Accordion.Header>
    <Accordion.Body>
      
        {category.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
     
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

                        {/* </ul> */}

                      </div>
                  </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-6 items-center">

                  <div className=" group  h-[84px] flex items-center">

                    <a href='/' className="uppercase flex items-center gap-1 ">
                      SHOP
                      <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                    </a>

                    <div className="absolute justify-center top-[100px] w-full left-0 right-0 h-[auto] hidden group-hover:flex  bg-white text-black mt-4 py-[50px] shadow-lg z-50">
                      <div className="max-w-7xxl w-full mx-auto px-[15px] flex">
                        {/* ================================================================== */}
                        <div className='w-1/3' >

                          <h4 className=" pr-[30px] text-[14px] text-primary-btnHover capitalize mb-[25px] leading-[1.4]">Men</h4>
                          <div className="grid grid-cols-2 gap-4 ">
                            <ul className="space-y-1 text-sm pt-[5px] ">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Jackets & Coats</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Jeans</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Loungewear</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Polo</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">shirts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Shorts</a>
                              </li>
                            </ul>
                            <ul className="space-y-1 text-sm">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Suits</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Swimwear</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">T-shirts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Tracksuits</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Trousers</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Underwear</a>
                              </li>
                            </ul>
                          </div>


                        </div>
                        {/* ==================================================================== */}
                        <div className='w-1/3' >

                          <h4 className="pr-[30px] text-[14px] text-primary-btnHover capitalize mb-[25px] leading-[1.4] ">Women</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-1 text-sm pt-[5px] ">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Dresses</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Jackets & Coats</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Jeans</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Loungewear</a>
                              </li>

                            </ul>
                            <ul className="space-y-1 text-sm pt-[5px] ">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Shorts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Skirts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Suits</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Swimwear</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Top</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Trousers</a>
                              </li>
                            </ul>
                          </div>


                        </div>

                        {/* ============================================================================= */}
                        <div className='w-1/3'>

                          <h4 className=" pr-[30px] text-[14px] text-primary-btnHover capitalize mb-[25px] leading-[1.4]">Others</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-1 text-sm pt-[5px] ">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Accessories</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Bags</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Belts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Hats</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Watches</a>
                              </li>

                            </ul>
                            <ul className="space-y-1 text-sm pt-[5px] ">

                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Jewelry</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Sale</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Shoes</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Vintage</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px] font-medium pr-[30px] hover:text-primary-red">Designers</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[4px]  font-medium pr-[30px] hover:text-primary-red">Lifestyle</a>
                              </li>
                            </ul>
                          </div>


                        </div>
                      </div >
                    </div>
                  </div>

                  <div className=" group h-[84px] flex items-center">
                    <a href='/' className="uppercase flex items-center gap-1">
                      CATEGORY
                      <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                    </a>
                    <div className="absolute w-full left-0 top-[100px] right-0 h-[auto] hidden group-hover:flex gap-10 bg-white text-black mt-4   shadow-lg z-50">
                      <div className="max-w-7xxl w-full mx-auto px-[15px] justify-center flex" >

                        {/* ============================================================= */}
                        {/* <h4 className="font-semibold text-sm mb-2">Title</h4> */}

                        <ul className="py-[50px] text-sm font-medium flex gap-[20px] xl:gap-[30px] justify-center items-center text-center">
                          <li className='flex flex-col' >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">
                              <a href="">  <LazyLoadImage
                                src={Category1}
                                alt="Category Women"
                                className="category w-full h-full object-contain"
                              />
                                {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}

                              </a>
                            </div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Women</a>
                          </li>
                          <li className='flex flex-col'  >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">
                              <LazyLoadImage
                                src={Category2}
                                alt="CategoryMmen"
                                className="category w-full h-full object-contain"
                              />
                            </div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Men</a>
                          </li>

                          <li className='flex flex-col'  >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">
                              <LazyLoadImage
                                src={Category3}
                                alt="Category Shoes"
                                className="category w-full h-full object-contain"
                              />
                            </div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Shoes</a>
                          </li>
                          <li className='flex flex-col'  >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">

                              <LazyLoadImage
                                src={Category4}
                                alt="Category Bags"
                                className="category w-full h-full object-contain"
                              />   </div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Bags</a>
                          </li>
                          <li className='flex flex-col' >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">
                              <LazyLoadImage
                                src={Category5}
                                alt="Category Glasses"
                                className="category w-full h-full object-contain"
                              />   </div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Glasses</a>
                          </li>
                          <li className='flex flex-col'  >
                            <div className="rounded-[50%] h-[150px] xl:h-[179.156px] w-[150px] xl:w-[179.156px] bg-[#f3f3f3] overflow-hidden rounded-dropdown">
                              <LazyLoadImage
                                src={Category6}
                                alt="Category Jwelery"
                                className="category w-full h-full object-contain"
                              /></div>
                            <a href="#" className="pt-[20px] text-[17px] leading-[1.4] hover:text-primary-red">Jwelery</a>
                          </li>
                        </ul>
                      </div>
                    </div >
                  </div>
                  <div className=" group h-[84px] flex items-center">
                    <a href='/' className="uppercase flex items-center gap-1">
                      MEN
                      <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                    </a>
                    <div className="absolute flex-col w-full top-[100px] left-0 right-0 h-[auto] hidden group-hover:flex  bg-white text-black mt-4   shadow-lg z-50">
                      <div className="max-w-7xxl w-full mx-auto px-[15px] justify-center flex" >
                        <div className='flex gap-[30px] w-full' >
                          <div className="w-[60%] pr-[50px] py-[50px]">
                            <h4 className="font-semibold text-[14px] text-[#808080] mb-[25px]">Men</h4>
                            <div className="grid grid-cols-3 gap-4">
                              <ul className=" text-[17px] leading-[22px]">
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red' >Jackets & Coats</a>
                                </li>
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red'>Jeans</a>
                                </li>
                                <li className="py-[5px] font-medium">
                                  <a href="#" className='hover:text-primary-red' >Loungewear</a>
                                </li>
                                <li className="py-[5px] font-medium">
                                  <a href="#" className='hover:text-primary-red'>Polo shirts</a>
                                </li>
                              </ul>

                              <ul className="text-[17px] leading-[22px]">
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red'>Shirts</a>
                                </li>
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red'>Shorts</a>
                                </li>
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red'>Suits</a>
                                </li>
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red' >Swimwear</a>
                                </li>
                              </ul>
                              <ul className=" text-[17px] leading-[22px]">
                                <li className="py-[5px] font-medium">
                                  <a href="#" className='hover:text-primary-red'>T-shirts</a>
                                </li>
                                <li className="py-[5px] font-medium" >
                                  <a href="#" className='hover:text-primary-red' >Tracksuits</a>
                                </li >
                                <li className="py-[5px] font-medium">
                                  <a href="#" className='hover:text-primary-red'>Trousers</a>
                                </li>
                                <li className="py-[5px] font-medium">
                                  <a href="#" className='hover:text-primary-red' > Underwear</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-[40%] h-[273px] dropdown-mega3" style={{ backgroundImage: `url(${MenMegaMenu})` }}></div>
                        </div>

                      </div >
                      <div className="second-part w-full flex gap-[30px] h-[340px]" style={{ backgroundImage: `url(${MenMegaMenu5})` }}>
                        <div className="columns w-1/2"></div>
                        <div className="columns w-1/2 flex items-center">
                          <div className='flex flex-col'>
                            <div className="part-two mb-5"><h2 class="text-white font-medium text-[40px] leading-[1] mb-[30px]">The latest men's trends <br />
                              this season</h2>
                              <p className='text-[22px] mb-5 text-white leading-[1]'>New collections!</p></div>
                            <div>  <button className='py-2 px-10 rounded-[40px] border-1 border-primary-red hover:bg-white hover:text-primary-red font-medium text-[20px] hover:border-primary-red bg-primary-red shop-now text-white leading-[1.4]'>Shop now</button></div>
                          </div>
                        </div>
                      </div>
                    </div >
                  </div>
                  <div className=" group h-[84px] flex items-center">
                    <a href='/' className="uppercase flex items-center gap-1">
                      WOMEN
                      <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                    </a>
                    <div className="absolute w-full top-[100px] left-0 right-0  hidden group-hover:flex gap-10 bg-white text-black mt-4  shadow-lg z-50 ">


                      <div className="max-w-7xxl w-full mx-auto gap-[30px] px-[15px] justify-center flex" >
                        <div className="w-[42%] py-[50px] dropdown-mega4" style={{ backgroundImage: `url(${MenMegaMenu1})` }}>
                          <h4 className="font-semibold text-[#808080] text-[14px] mb-[25px] leading-[1.4]">Women</h4>
                          <div className="grid">
                            <ul className="space-y-1 text-[17px] pt-[5px]">
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Dresses</a>
                              </li>
                              <li >
                                <a href="#" className="  py-[5px]  font-medium pr-[30px]">Jackets & Coats</a>
                              </li>
                              <li >
                                <a href="#" className="  py-[5px]  font-medium pr-[30px] hover:text-primary-red">Jeans</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Lingerie</a>
                              </li>

                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Loungewear</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Shorts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Skirts</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Suits</a>
                              </li>

                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Swimwear</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Top</a>
                              </li>
                              <li >
                                <a href="#" className=" py-[5px]  font-medium pr-[30px] hover:text-primary-red">Trousers</a>
                              </li>

                            </ul>
                          </div>

                        </div>
                        <div className="w-[34%]">
                          <div className="box w-full relative mt-[70px] z-[20] overflow-hidden">
                            <div className="w-full relative w-fit z-[9999] overlay--box">
                              <img src={MenMegaMenu2} alt="" className='bg-img z-0 w-full' />
                              <div className="box-content overflow-hidden absolute top-[30px] left-[30px] xl:top-[50px] xl:left-[50px] right-[auto] bottom-[auto] z-[10]">
                                <h2 className='text-[30px] text-white font-medium leading-[1.2] mb-5'>Street style <br />
                                  has its own <br />
                                  rules</h2>
                                <div className=""><div className="flex gap-2 text-[18.7px] font-medium text-white wrapper-btn"><div className="btn-content">Shop Now</div> <img src={arrow} alt="" className='invert' /></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[23%]">
                          <div className="mb-[50px] mt-[70px] shop-box">
                            <div className="image-content-wrapper relative">
                              <div className="image-wrapper">  <img src={MenMegaMenu3} alt="" className='img1' />
                                <img src={MenMegaMenu4} alt="" className='img2' />
                              </div>
                              <div class="product-label absolute">
                                <span class="onsale percent">
                                  <span>-70%</span>
                                </span>
                                <span class="featured">
                                  <span>Hot</span>
                                </span>
                              </div>
                              <div className="product-group-button">


                                <div class="button-in quickshop">
                                  <a class="quickshop" href="#"><FontAwesomeIcon icon={faSearch} /></a>
                                  <span class="ts-tooltip button-tooltip">Compare</span>
                                </div>

                                <div class="button-in compare">
                                  <a class="compare" href="/" ><FontAwesomeIcon icon={faBarChart} /></a>
                                  <span class="ts-tooltip button-tooltip">Quick view</span>
                                </div>

                                <div class="button-in wishlist">

                                  <a href="/" class=""><FontAwesomeIcon icon={faHeart} />
                                  </a>
                                  <span class="ts-tooltip button-tooltip">Wishlist</span>
                                </div>
                                <div class="loop-add-to-cart py-[7.5px] px-[10px] bg-black text-white text-center font-medium hover:bg-primary-red"><a href="/"><span class="ts-tooltip  text-[18px] leading-[1.4] font-medium">Select options</span></a></div>
                              </div>
                            </div>
                            <div className="wrapper-shop-header pt-5">
                              <h3 className='text-[15px] mb-2'><a href="">Textured vegan leather moto Jacket</a></h3>
                              <div className="mb-2 text-[15px] ">$693.00–$699.00</div></div>
                            <div className="available-color items-center p-1 flex gap-3">
                              <div className="firstcolor bg-[#000] h-[23px] w-[23px] rounded-[50%] relative flex items-center justify-center"><FontAwesomeIcon icon={faCheck} className='text-white text-[8px] font-medium ' /></div>
                              <div className="firstcolor bg-[#D9121F] h-[23px] w-[23px] rounded-[50%] relative flex items-center justify-center"><FontAwesomeIcon icon={faCheck} className='text-white text-[8px] font-medium ' /></div>
                            </div>
                          </div>
                        </div>
                      </div >
                    </div>
                  </div>
                </nav>
                {/* Submenu Dropdown */}

                {/* <div className="absolute  hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-2 z-50 min-w-[150px]">
                     
                        <a  href="#" className="block px-3 py-1 hover:bg-gray-100 text-sm">
                          sub
                        </a>
                     
                    </div> */}


                {/* Mega Menu Dropdown */}

                {/* <div className="absolute w-full left-0 right-0 h-[auto] hidden group-hover:flex gap-10 bg-white text-black mt-4 p-6  shadow-lg z-50">

                <div >
                  <h4 className="font-semibold text-sm mb-2">Title</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <ul className="space-y-1 text-sm">
                      <li >
                        <a href="#" className="hover:text-blue-600">item</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li >
                      <a href="#" className="hover:text-blue-600">sub</a>
                    </li>
                  </ul>
                </div>
              </div> */}
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
              <div className="flex items-center gap-6 right-icons">
                {iconItems.map(({ icon, hover, key }) => (
                  <FontAwesomeIcon
                    key={key}
                    icon={icon}
                    className={`text-white  cursor-pointer`}
                    size="lg"
                  />
                ))}
                <span className='text-black lg:text-white text-[13px] CartAmount'>$24.90</span>

                <FontAwesomeIcon

                  icon={faShoppingBag}
                  className={`text-white  cursor-pointer`}
                  size="lg"
                />

              </div> </div>
          </div>
        </div>
        {/* </div> */}
        {/* Mobile Menu */}
        {
          // menuOpen && (
          //   <div className="lg:hidden bg-gray-800 text-white px-4 py-4 space-y-4">
          //     {menuItems.map((item, index) => (
          //       <div key={index}>
          //         <p className="uppercase font-semibold mb-1">{item.name}</p>
          //         {item.subItems && (
          //           <ul className="space-y-1 text-sm pl-2">
          //             {item.subItems.map((sub, i) => (
          //               <li key={i}><a href="#" className="block">{sub}</a></li>
          //             ))}
          //           </ul>
          //         )}
          //         {item.megaMenu && item.megaMenu.map((section, secIndex) => (
          //           <div key={secIndex} className="pl-2 mb-2">
          //             <p className="text-sm font-medium">{section.title}</p>
          //             <ul className="text-sm space-y-1 pl-2">
          //               {section.items.map((sub, j) => (
          //                 <li key={j}><a href="#" className="block">{sub}</a></li>
          //               ))}
          //             </ul>
          //           </div>
          //         ))}
          //       </div>
          //     ))}
          //   </div>
          // )
        }
    </header >
  );
};

export default Header;
