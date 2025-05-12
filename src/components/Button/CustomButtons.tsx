import React, { ReactNode } from "react";

type propstype = {
  text?: ReactNode;
  extraclassName?: string;
  handleclick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);

  disabled?:boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

const GradiantButton: React.FC<propstype> = (
  { text = "button", extraclassName = "", handleclick = () => {},disabled=false },
  type = undefined
) => {
  return (
    <button
    disabled={disabled}  
    type={type}
      onClick={handleclick}
      className={` rounded-full bg-gradient-to-r from-primary-purple to-primary-purple hover:from-primary-purple hover:to-secondary-green text-white font-semibold text-lg transition-all transform hover:scale-105 duration-200 flex items-center justify-center ${extraclassName}`}
    >
      {text}
    </button>
  );
};

const PurpleButton: React.FC<propstype> = ({
  text = "Button",
  extraclassName = "",
  handleclick = () => {},
  disabled=false,
  type = undefined,
}) => {
  return (
    <button
    disabled={disabled}  
    type={type}
      onClick={handleclick}
      className={`bg-primary-purple hover:bg-primary-purple/90 text-white font-semibold  rounded-full transition-all transform hover:scale-105 duration-200 ${extraclassName}`}
    >
      {text}
    </button>
  );
};

const BlackButton: React.FC<propstype> = ({
  text = "Button",
  extraclassName = "",
  handleclick = () => {},
  disabled=false,
  type = undefined,
}) => {
  return (
    <button
    disabled={disabled}  
    type={type}
      onClick={(e:React.MouseEvent<HTMLButtonElement>)=>handleclick(e)}
      className={`px-8 py-3 rounded-full bg-secondary-gray hover:bg-secondary-gray/80 text-white font-semibold transition-all ${extraclassName}`}
    >
      {text}
    </button>
  );
};
const ColorfulButton: React.FC<propstype> = ({
  text = "Button",
  extraclassName = "",
  handleclick = () => {},
  disabled=false,
  type = undefined,
}) => {
  return (
    <button

      disabled={disabled}
      type={type}
      onClick={handleclick}
      className={`px-8 py-3 rounded-full bg-gradient-to-r from-primary-purple to-secondary-green text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary-purple/20 transform hover:scale-105 duration-200 ${extraclassName}`}
    >
      {text}
    </button>
  );
};

export { GradiantButton, PurpleButton, BlackButton, ColorfulButton };
