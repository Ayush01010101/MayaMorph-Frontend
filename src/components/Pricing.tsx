import React from 'react';
import PricingCard from './Cards/PricingCard';
import useGetUserStoreData from '../Hooks/useGetUserStoreData';
import HandlePlanClick from '../HandleClickFunctions/ChoosePlanClickFunctions/HandlePlanClick';
import PaymentProcessingPopup from './Popups/PaymentProcessingPopup';
import { useState } from 'react';
import NavigationFunctions from '../HandleClickFunctions/NavigationClickFunctions/NavigationFunctions';




const Pricing: React.FC = () => {
  const [islogin,loginstatus]=useGetUserStoreData()
  const userid:string | undefined=islogin?.id  
  const [showpayment,setShowpayment]=useState<boolean>(false)
  const navigate=NavigationFunctions()
  return (
    <section id="pricing" className="py-24">
      {showpayment && 
       <PaymentProcessingPopup/>
      }      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {!islogin &&  <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Choose the plan that works best for your creative needs.
            All plans include our core AI image generation technology.
          </p>
        </div>}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            options={
              [
               {message:"2 Credits",avaliable:true},
               {message:"2 Image Generation",avaliable:true},
               {message:"720p resolution",avaliable:true},
               {message:"Standard response time",avaliable:true},
               {message:"Commercial use",avaliable:false},
               {message:"Priority support",avaliable:false},
               
              ]
            }
            description='text description'
            isPopular={false}
            name='Starter Plan'
            price={'0 ₹'}
            buttontext={'Active Plan'}
            handleclick={()=>{}}
          />
          <PricingCard
            options={
              [
               {message:"15 Credits",avaliable:true},
               {message:"15 Image Generation",avaliable:true},
               {message:"1080 resolution",avaliable:true},
               {message:"Standard response time",avaliable:true},
               {message:"Commercial use",avaliable:true},
               {message:"Priority support",avaliable:false},
               
              ]
            }
            description='text description'
            isPopular={true}
            name='Hot Plan'
            price={'29 ₹'}
            buttontext={'Choose Plan'}
            handleclick={()=>{
              if(loginstatus){
                setShowpayment(true)
              HandlePlanClick(29,userid)
              .then(()=>setShowpayment(false))
              }
              else{
                navigate.customnavigation("/login")
              }
              
            }}
          />
          <PricingCard
            options={
              [
               {message:"250 Credits",avaliable:true},
               {message:"250 Image Generation",avaliable:true},
               {message:"4K resolution (under maintaince)",avaliable:true},
               {message:"Standard response time",avaliable:true},
               {message:"Commercial use",avaliable:true},
               {message:"Priority support",avaliable:true},
               
              ]
            }
            description='text description'
            isPopular={false}
            name='Commercial Plan'
            price={'499 ₹'}
            buttontext={'Choose Plan'}
            handleclick={()=>{
             if(loginstatus){
                setShowpayment(true)
              HandlePlanClick(499,userid)
              .then(()=>setShowpayment(false))
              }
              else{
                navigate.customnavigation("/login")
              }
              
            }}
          />
        </div>
        
       {!islogin &&  <div className="mt-16 p-8 bg-secondary-gray/30 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-gray-300 mb-6">
            We offer tailored packages for teams and organizations with specific requirements.
            Contact our sales team to discuss your needs.
          </p>
          <button className="px-8 py-3 rounded-full border border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white font-semibold transition-all">
            Contact Us
          </button>
        </div> }
      </div>
    </section>
  );
};

export default Pricing;