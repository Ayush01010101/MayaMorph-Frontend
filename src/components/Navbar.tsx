import React, { useState, useEffect, ReactNode } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { PurpleButton } from "./Button/CustomButtons";
import NavigationFunctions from "../HandleClickFunctions/NavigationClickFunctions/NavigationFunctions";
import useGetUserStoreData from "../Hooks/useGetUserStoreData";
import { createPortal } from "react-dom";

type propstype = {
  options: {
    text: ReactNode;
    handleclick?: () => void;
    extraClassname?: string;
    route?: string;
  }[];
  buttontext: ReactNode;
  Handleclick?: () => void;
};

const Navbar: React.FC<propstype> = ({
  options,
  buttontext,
  Handleclick = () => {},
}: propstype) => {
  const currentroute = window.location.href.split("/")[3];
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = NavigationFunctions();
  const [islogin] = useGetUserStoreData();

  // scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);


  const openMenu = () => {
    setIsMounted(true);
    
    requestAnimationFrame(() => setIsOpen(true));
  };

  // when closing, trigger exit animation first, then unmount
  const closeMenu = () => {
    setIsOpen(false);
   
    setTimeout(() => setIsMounted(false), 500);
  };

  const mobileMenu = isMounted ? (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeMenu}
      />

      {/* sliding panel */}
      <div
        className={`
          absolute top-0 right-0 h-full w-80 
          bg-gradient-to-br from-primary-dark via-secondary-gray to-primary-dark
          transform
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ boxShadow: "-8px 0 20px rgba(166, 148, 255, 0.1)" }}
      >
        <div className="h-full p-8 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-secondary-gray/50 text-white hover:text-primary-purple transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-8 mt-12">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  option.handleclick?.();
                  closeMenu();
                }}
                className={`
                  text-lg cursor-pointer
                  transform transition-all duration-300
                  delay-[${index * 100}ms]
                  ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                  ${
                    option.route === currentroute
                      ? "text-primary-purple font-semibold"
                      : "text-white hover:text-primary-purple"
                  }
                  ${option.extraClassname || ""}
                `}
              >
                {option.text}
              </div>
            ))}

            <div
              className={`
                mt-auto
                transform transition-all duration-300
                delay-[${options.length * 100}ms]
                ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
              `}
            >
              <PurpleButton
                text={buttontext}
                extraclassName="w-full py-3 flex flex-wrap justify-center"
                handleclick={() => {
                  islogin
                    ? navigate.customnavigation("/pricing")
                    : navigate.navigateToLogin();
                  closeMenu();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <nav
      className={`
        fixed w-full z-40 transition-all duration-300
        ${isScrolled ? "bg-secondary-gray/80 backdrop-blur-md py-3" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Sparkles className="h-8 w-8 text-primary-purple" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-secondary-green">
                MayaMorph
              </span>
            </div>
          </div>

          {/* desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {options.map((option, i) => (
                <div
                  key={i}
                  onClick={() => option.handleclick?.()}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${option.route === currentroute ? "text-primary-purple text-xl" : "text-white hover:text-primary-purple"}
                    ${option.extraClassname || ""}
                  `}
                >
                  {option.text}
                </div>
              ))}
              <PurpleButton
                text={buttontext}
                extraclassName="px-6 py-2 flex justify-center items-center gap-2"
                handleclick={
                  islogin
                    ? () => navigate.customnavigation("/pricing")
                    : navigate.navigateToLogin
                }
              />
            </div>
          </div>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={isOpen ? closeMenu : openMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-purple focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {createPortal(mobileMenu, document.querySelector("#portal")!)}
    </nav>
  );
};

export default Navbar;
