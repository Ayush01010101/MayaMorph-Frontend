import { useNavigate } from "react-router";

const NavigationFunctions = () => {
  const navigate = useNavigate(); 

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const customnavigation=(path:string)=>{
    navigate(path)
  }

  return {
    navigateToLogin,
    navigateToHome,
    customnavigation
  };
};

export default NavigationFunctions;
