import React from 'react';

const FooterTopSection = () => {
  return (
    <div className="w-full bg-black py-20 ">
      <div className="max-w-7xxl mx-auto px-[15px] flex flex-col md:flex-row justify-between gap-10">

        {/* Subscribe Section */}
        <div className="md:w-2/5">
          <h3 className="text-[30px] text-white font-medium mb-2">
            Get our emails for info on new items, sales and more.
          </h3>
          <p className="text-[#75767c] mb-4">
            We'll email you a voucher worth £10 off your first order over £50.
          </p>

          <form className="flex flex-col border border-white sm:flex-row" method="post">
            <input
              className="flex-1 py-[8px] px-[15px] border border-white "
              type="email"
              name="EMAIL"
              placeholder="Enter your email address"
              required
            />
            <button
              className="bg-black text-white px-[30px] py-[8px]  hover:bg-gray-800 transition"
              type="submit"
            >
              Subscribe
            </button>
          </form>

          <p className="text-[12px] text-[#75767C] mt-3">
            By subscribing you agree to our{' '}
            <a href="#" className="">Terms & Conditions and Privacy & Cookies Policy.</a>
          </p>
        </div>

        {/* Contact & App Section */}
        <div className="md:w-2/5">
          <h3 className="text-[30px]  font-medium text-white mb-2">
            Need help?<br />
            (+800) 1234 5678 90
          </h3>
          <p className="text-[#75767C] text-[16px] mb-4">We are available 8:00am – 7:00pm</p>

          

          <span className="text-[12px] text-[#75767C] block">
            <strong>Shopping App:</strong> Try our View in Your Room feature, manage registries and save payment info.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterTopSection;
