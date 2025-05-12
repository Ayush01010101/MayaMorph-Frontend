import { Check, X } from "lucide-react";
import { ReactNode } from "react";

type propstype={
    options:{message:string,avaliable:boolean}[],
    description:string,
    isPopular:boolean,
    handleclick:()=>void,
    name:string,
    price:string,
    buttontext:ReactNode
}

const PricingCard=({options,description,isPopular,name,price,buttontext,handleclick}:propstype):ReactNode=>{
    return (
        <div className={`relative rounded-2xl overflow-hidden  ${
              isPopular ? 'border-2 border-primary-purple' : 'border border-secondary-gray'
            }`}>
              {isPopular && (
                <div className="absolute top-0 right-0 bg-primary-purple text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}    
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{name} </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{price}</span>
                  {price !== '0 ₹' && <span className="text-gray-400 ml-1">/month</span>}
                </div>
                <p className="text-gray-300 mb-6">{description}</p>
                
                <button onClick={handleclick} className={`w-full py-3 rounded-full font-semibold mb-8 transition-all transform hover:scale-105 duration-200 ${
                  isPopular 
                    ? 'bg-gradient-to-r from-primary-purple to-secondary-green text-white' 
                    : 'bg-secondary-gray hover:bg-secondary-gray/80 text-white'
                }`}>
                  {buttontext}
                </button>
                
                <div className="space-y-3">
                    {options.map((option,key:number)=>(
                        <div key={key} className="p-2 rounded-lg font-medium flex justify-between items-center">
                            {option.message}
                            {option.avaliable? <Check className="h-5 w-5 text-secondary-green mr-3 flex-shrink-0" />: <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />}
                        </div>
                    ))}
                </div>
              </div>
            </div>
    )
}

export default PricingCard