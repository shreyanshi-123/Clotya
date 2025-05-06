import React from 'react';
import Newsletter from './newsletter'

const Logo = `${process.env.REACT_APP_API_URL}/assets/images/logo-white.webp`;

const footerMenus = [
    {
        title: 'Information',
        links: ['About Us', 'Privacy Policy', 'Returns Policy', 'Shipping Policy', 'Dropshipping'],
    },
    {
        title: 'Account',
        links: ['Dashboard', 'My Orders', 'My Wishlist', 'Account details', 'Track My Orders'],
    },
    {
        title: 'Shop',
        links: ['Affiliate', 'Bestsellers', 'Discount', 'Latest Products', 'Sale Products'],
    },
    {
        title: 'Categories',
        links: ['Women', 'Men', 'Bags', 'Outerwear', 'Shoes'],
    },
];
 

 

const bottomLinks = ['Privacy Policy', 'Terms and Conditions', 'Returns Policy'];


const Footer = () => {
    return (
        <footer className="bg-white text-black text-sm">
            <Newsletter/>
            <div className="max-w-7xxl mx-auto px-[15px]">
                <div className=" px-0 py-[60px] mx-auto  flex flex-col md:flex-row flex-wrap gap-y-10 md:gap-y-0">

                    {/* First Column (approx. 30%) */}
                    <div className="md:w-[30%] w-full pr-6">
                        <div className="max-w-[310px]">
                            <img className="invert w-[148px] mb-4" src={Logo} alt="Clotya Logo" />
                            <p className="text-black font-[14px]">
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.
                            </p>
                            <p className="text-black font-[14px]">(+800) 1234 5678 90 - info@example.com</p></div>
                    </div>

                    {/* Other Columns (4 x ~17.5%) */}
                    {footerMenus.map((menu, idx) => (
                        <div key={idx} className="md:w-[17.5%] w-full">
                            <h4 className="text-[16px] font-semibold mb-[15px]">{menu.title}</h4>
                            <ul className=" text-black">
                                {menu.links.map((link, i) => (
                                    <li key={i} className='mt-[3px] leading-[1.6]' >
                                        <a href="#" className="hover:text-black transition-colors text-[15px]">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* Copyright */}
            <div className="max-w-7xxl mx-auto px-[15px] border-t border-gray-200">
  <div className="pt-[40px] pb-[50px] flex flex-col md:flex-row justify-between items-center text-[13px] text-black gap-4">
    <p className='leading-[1.5]'>Copyright {new Date().getFullYear()} &copy; Clotya. All rights reserved.</p>
    <ul className="flex flex-wrap text-[13px] text-black divide-x divide-gray-300">
  {bottomLinks.map((link, i) => (
    <li key={i} className="px-3 first:pl-0 last:pr-0">
      <a href="#" className="leading-[1.5]">{link}</a>
    </li>
  ))}
</ul>

  </div>
</div>

        </footer>
    );
};

export default Footer;
