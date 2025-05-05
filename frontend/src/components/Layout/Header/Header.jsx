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
import { faBagShopping, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Header.css'
import { faHeart, faUser, fas } from '@fortawesome/free-regular-svg-icons';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

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
const arrow = `${process.env.REACT_APP_API_URL}/assets/images/dropdowns/arrow-right.png`;



// Menu Data
const FirstMenuMen = [{
  Row_1: ['Jackets & Coats', 'Jeans', 'Loungewear', 'Polo', 'shirts', 'Shirts', 'Shorts'],
  Row_2: ['Suits', 'Swimwear', 'T-shirts', 'Tracksuits', 'Trousers', 'Underwear']
}]

const FirstMenuWomen = [{
  Row_1: ['Dresses', ' Jackets & Coats', 'Jeans', 'Loungewear'],
  Row_2: ['Shorts', 'Skirts', 'Suits', 'Suits', 'Swimwear', 'Top', 'Trousers']
}]

const FirstMenuOther = [{

  Row_1: ['Accessories', ' Bags', 'Belts', 'Hats', 'Watches'],
  Row_2: ['Jewelry', 'Sale', 'Shoes', 'Vintage', 'Designers', 'Lifestyle']

}]


const iconItems = [
  { icon: faUser, hover: 'hover:text-green-500', key: 'admin' },
  { icon: faSearch, hover: 'hover:text-gray-500', key: 'search' },
  { icon: faHeart, hover: 'hover:text-red-500', key: 'wishlist' },
  { icon: faBagShopping, hover: 'hover:text-blue-500', key: 'cart' },
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Promo Bar */}
      {/* {iconItems.map(({ icon, hover, key }) => (
        <FontAwesomeIcon
          key={key}
          icon={icon}
          className={`text-white  cursor-pointer`}
          size="lg"
        />
      ))} */}

      {/* Navigation Bar */}
      <div className=" text-white absolute w-full">
        <div className="bg-black text-white text-[12px] text-center relative py-2.5">
          <div class="container  m-auto">
            <p className='text-[12px] uppercase tracking-[0.25px]'>SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <a href="/shop" className='font-semibold'>SHOP NOW</a></p>
          </div>
        </div>
        <div className="max-w-7xxl mx-auto px-[15px]  flex items-center  ">
          <div className="border-b-[1px] border-primary-gray border-solid flex w-full justify-between h-[84px] items-center ">
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

                <div className=" group">

                  <a href='/' className="uppercase flex items-center gap-1">
                    SHOP
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                  </a>

                  <div className="absolute justify-center w-full left-0 right-0 h-[auto] hidden group-hover:flex  bg-white text-black mt-4 py-[50px] shadow-lg z-50">
                    <div className="max-w-7xxl w-full mx-auto px-[15px] flex">
                      {/* ================================================================== */}
                      <div className='w-1/3' >

                        <h4 className=" pr-[30px] text-[14px] text-primary-btnHover capitalize mb-[25px] leading-[1.4]">Men</h4>
                        <div className="grid grid-cols-2 gap-4 ">
                          <ul className="space-y-1 text-sm pt-[5px] ">

                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Jackets & Coats</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Jeans</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Loungewear</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Polo</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">shirts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Shorts</a>
                            </li>
                          </ul>
                          <ul className="space-y-1 text-sm">

                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Suits</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Swimwear</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">T-shirts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Tracksuits</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Trousers</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px] ">Underwear</a>
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
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Dresses</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Jackets & Coats</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Jeans</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Loungewear</a>
                            </li>

                          </ul>
                          <ul className="space-y-1 text-sm pt-[5px] ">

                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Shorts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Skirts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Suits</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Swimwear</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Top</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Trousers</a>
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
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Accessories</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Bags</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Belts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Hats</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Watches</a>
                            </li>

                          </ul>
                          <ul className="space-y-1 text-sm pt-[5px] ">

                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Jewelry</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Sale</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Shoes</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Vintage</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px] font-medium pr-[30px]">Designers</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[4px]  font-medium pr-[30px]">Lifestyle</a>
                            </li>
                          </ul>
                        </div>


                      </div>
                    </div >
                  </div>
                </div>
                <div className=" group">
                  <a href='/' className="uppercase flex items-center gap-1">
                    CATEGORY
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                  </a>
                  <div className="absolute w-full left-0 right-0 h-[auto] hidden group-hover:flex gap-10 bg-white text-black mt-4   shadow-lg z-50">
                    <div className="max-w-7xxl w-full mx-auto px-[15px] justify-center flex" >

                      {/* ============================================================= */}
                      {/* <h4 className="font-semibold text-sm mb-2">Title</h4> */}

                      <ul className="py-[50px] text-sm font-medium flex gap-[30px] justify-center items-center text-center">
                        <li className='flex flex-col' >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">
                            <LazyLoadImage
                              src={Category1}
                              alt="Category Women"
                              className="category w-full h-full object-contain"
                            />
                          </div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Women</a>
                        </li>
                        <li className='flex flex-col'  >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">
                            <LazyLoadImage
                              src={Category2}
                              alt="CategoryMmen"
                              className="category w-full h-full object-contain"
                            />
                          </div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Men</a>
                        </li>

                        <li className='flex flex-col'  >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">
                            <LazyLoadImage
                              src={Category3}
                              alt="Category Shoes"
                              className="category w-full h-full object-contain"
                            />
                          </div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Shoes</a>
                        </li>
                        <li className='flex flex-col'  >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">

                            <LazyLoadImage
                              src={Category4}
                              alt="Category Bags"
                              className="category w-full h-full object-contain"
                            />   </div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Bags</a>
                        </li>
                        <li className='flex flex-col' >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">
                            <LazyLoadImage
                              src={Category5}
                              alt="Category Glasses"
                              className="category w-full h-full object-contain"
                            />   </div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Glasses</a>
                        </li>
                        <li className='flex flex-col'  >
                          <div className="rounded-[50%] h-[179.156px]  w-[179.156px] bg-[#f3f3f3] overflow-hidden">
                            <LazyLoadImage
                              src={Category6}
                              alt="Category Jwelery"
                              className="category w-full h-full object-contain"
                            /></div>
                          <a href="#" className="pt-[20px] text-[17px] leading-[1.4]">Jwelery</a>
                        </li>
                      </ul>
                    </div>
                  </div >
                </div>
                <div className=" group">
                  <a href='/' className="uppercase flex items-center gap-1">
                    MEN
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                  </a>
                  <div className="absolute w-full left-0 right-0 h-[auto] hidden group-hover:flex gap-10 bg-white text-black mt-4   shadow-lg z-50">
                    <div className="max-w-7xxl w-full mx-auto px-[15px] justify-center flex" >
                      <div className='flex gap-[30px] w-full' >
                        <div className="w-[60%] pr-[50px] py-[50px]">
                          <h4 className="font-semibold text-[14px] text-[#808080] mb-[25px]">Men</h4>
                          <div className="grid grid-cols-3 gap-4">
                            <ul className=" text-[17px] leading-[22px]">
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Jackets & Coats</a>
                              </li>
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Jeans</a>
                              </li>
                              <li className="py-[5px] font-medium">
                                <a href="#" >Loungewear</a>
                              </li>
                              <li className="py-[5px] font-medium">
                                <a href="#">Polo shirts</a>
                              </li>
                            </ul>

                            <ul className="text-[17px] leading-[22px]">
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Shirts</a>
                              </li>
                              <li className="py-[5px] font-medium" >
                                <a href="#">Shorts</a>
                              </li>
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Suits</a>
                              </li>
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Swimwear</a>
                              </li>
                            </ul>
                            <ul className=" text-[17px] leading-[22px]">
                              <li className="py-[5px] font-medium">
                                <a href="#" >T-shirts</a>
                              </li>
                              <li className="py-[5px] font-medium" >
                                <a href="#" >Tracksuits</a>
                              </li >
                              <li className="py-[5px] font-medium">
                                <a href="#" >Trousers</a>
                              </li>
                              <li className="py-[5px] font-medium">
                                <a href="#" > Underwear</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-[40%] h-[273px] dropdown-mega3" style={{ backgroundImage: `url(${MenMegaMenu})` }}></div>
                      </div>
                    </div >
                  </div >
                </div>
                <div className=" group">
                  <a href='/' className="uppercase flex items-center gap-1">
                    WOMEN
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs ml-1" />
                  </a>
                  <div className="absolute w-full left-0 right-0 h-[611px] hidden group-hover:flex gap-10 bg-white text-black mt-4  shadow-lg z-50 ">


                    <div className="max-w-7xxl w-full mx-auto gap-[30px] px-[15px] justify-center flex" >
                      <div className="w-[42%] py-[50px] dropdown-mega4" style={{ backgroundImage: `url(${MenMegaMenu1})` }}>
                        <h4 className="font-semibold text-[#808080] text-[14px] mb-[25px] leading-[1.4]">Women</h4>
                        <div className="grid">
                          <ul className="space-y-1 text-[17px] pt-[5px]">
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Dresses</a>
                            </li>
                            <li >
                              <a href="#" className="  py-[5px]  font-medium pr-[30px]">Jackets & Coats</a>
                            </li>
                            <li >
                              <a href="#" className="  py-[5px]  font-medium pr-[30px]">Jeans</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Lingerie</a>
                            </li>

                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Loungewear</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Shorts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Skirts</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Suits</a>
                            </li>

                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Swimwear</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Top</a>
                            </li>
                            <li >
                              <a href="#" className=" py-[5px]  font-medium pr-[30px]">Trousers</a>
                            </li>

                          </ul>
                        </div>

                      </div>
                      <div className="w-[34%]">
                        <div className="box w-full relative mt-[70px] z-[20] overflow-hidden">
                          <div className="w-full relative w-fit z-[9999] overlay--box">
                            <img src={MenMegaMenu2} alt="" className='bg-img z-0 w-full' />
                            <div className="box-content overflow-hidden absolute top-[50px] left-[50px] right-[auto] bottom-[auto] z-[10]">
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
                          <div className="image-wrapper">  <img src={MenMegaMenu3} alt="" className='img1' />
                            <img src={MenMegaMenu4} alt="" className='img2' />
                          </div>
                          <div className="wrapper-shop-header pt-5">
                            <h3 className='text-[15px] mb-2'><a href="">Textured vegan leather moto Jacket</a></h3>
                            <div className="mb-2 text-[15px]">$693.00–$699.00</div></div>
                            <div className="available-color items-center p-1 flex gap-3">
                              <div className="firstcolor items-center bg-[#000] h-[23px] w-[23px] rounded-[50%]"></div>
                              <div className="firstcolor bg-[#D9121F] h-[23px] w-[23px] rounded-[50%]"><FontAwesomeIcon icon="fa-solid fa-check" /></div>
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
            <div className="flex items-center gap-6">
              {iconItems.map(({ icon, hover, key }) => (
                <FontAwesomeIcon
                  key={key}
                  icon={icon}
                  className={`text-white  cursor-pointer`}
                  size="lg"
                />
              ))}
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
