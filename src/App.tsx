import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Gem } from "lucide-react";
import useGetUserCredits from "./Hooks/userGetUserCredits";
import 'lenis/dist/lenis.css';
import Lenis from 'lenis'
import { useEffect } from "react";
import { ScrollToFunction } from "./HandleClickFunctions/ScrollToIdFunction/ScrollToFunction";
import NavigationFunctions from "./HandleClickFunctions/NavigationClickFunctions/NavigationFunctions";
import Homepage from "./Pages/HomePage";
import { Outlet } from "react-router";
import useGetUserStoreData from "./Hooks/useGetUserStoreData";
function App() {
  const [islogin,loginstatus]=useGetUserStoreData()
  
  const credits=useGetUserCredits()
  const navigation=NavigationFunctions()
 useEffect(()=>{
  let animationid:any
  const lenis=new Lenis()
  const raf=(time:any)=>{
    lenis.raf(time)
    animationid=requestAnimationFrame(raf)
  }
    animationid=requestAnimationFrame(raf)
  return () => {
    cancelAnimationFrame(animationid);
    lenis.destroy?.(); 
  };
 },[])
  return (
    <div className="min-h-screen bg-primary-dark text-primary-light font-sans">
      
      <Navbar
        options={
          loginstatus
            ? [
              {text:"Recent Images",handleclick:()=>{navigation.customnavigation('/recentimages')},route:"recentimages"},
              {text:"Pricing",handleclick:()=>{navigation.customnavigation("/pricing")},route:"pricing"},
              {text:"Profile",handleclick:()=>{navigation.customnavigation('/profile')},route:"profile"},
              {text:"Home",handleclick:()=>{navigation.customnavigation('/')},route:""},
            ]

            :
            [
              {text:"Features",handleclick:()=>{ScrollToFunction('#features')}},
              {text:"Gallary",handleclick:()=>{ScrollToFunction('#gallery')}},  
              {text:"How It Works",handleclick:()=>{ScrollToFunction('#how-it-works')}},
              {text:"Pricing",handleclick:()=>{ScrollToFunction('#pricing')}},
              {text:"FAQ",handleclick:()=>{ScrollToFunction('#faq')}},
            ]
        }

        // change true/false to islogin
        buttontext={islogin?<>Credits {credits}<Gem size={18} /></>:"Try Now"}
        
      />
      
      {loginstatus ? (
        <main>
          <Outlet />  
          
        </main>
      ) : (
        <Homepage/>
      )}
      <Footer />
    </div>
  );
}

export default App;
