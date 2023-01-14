
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
// import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#00001e');
  //const [linkColor, setLinkColor] = useState('#1f2937');
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#000000');
      } else {
        setShadow(false);
        setNavBg('#000010');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300 -mt-28"
          : "fixed w-full h-20 z-[100] -mt-28"
      }>
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          <div className="text-white flex">
            <h2>Front-End-Task</h2>
          </div>
        </a>
        <div>
          <ul  className="hidden md:flex">
          <li className="ml-7 text-sm uppercase text-white  hover:border-b">
              <a href="/">Home</a>
            </li>
            <li className="ml-7 text-sm uppercase text-white hover:border-b">
              <a href="/#about">About</a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.linkedin.com/in/md-tanvir-hassan-490253240"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full bg-gray-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.facebook.com/tanvirhassanmim"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full bg-gray-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebook />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://github.com/MdTanvirHassan"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full bg-gray-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="mailto:tanvirtamim72@gmail.com"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full bg-gray-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="personal-portfolio-next-7ny3rhpx1-mdtanvirhassan.vercel.app"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full bg-gray-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <TfiWorld />
                </div>
              </a>
            </li>
            
            
          </ul>
          {/* Hamburger Icon */}
          <div
            
            onClick={handleNav}
            className="md:hidden rounded-full bg-gray-600 p-2">
            <AiOutlineMenu size={25} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <h2>
                  Task
                </h2>
              </a >
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                <AiOutlineClose className="text-black" />
              </div>
            </div>
            
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </a>
             
            </ul>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/md-tanvir-hassan-490253240"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 social-icons">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/MdTanvirHassan"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 social-icons">
                    <FaGithub />
                  </div>
                </a>
                <a href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 social-icons">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 social-icons">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
