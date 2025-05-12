import { ReactNode } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

const Homepage=():ReactNode=>{
    return (
     
            <main>
          <Hero />
          <Features />
          <Gallery />
          <HowItWorks />
          <Pricing />
          <FAQ />
        </main>
      
    )
}

export default Homepage