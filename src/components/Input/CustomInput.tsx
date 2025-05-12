import React, { ReactNode } from 'react'
type inputpropstype={
    type?:string,
    value:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?:string,
    extraclassName?:string,
    extraElement?:ReactNode;
    label?:string
}

const NormalInput:React.FC<inputpropstype>=(
    {
        type='text',
        label,
        value,
        onChange,
        placeholder,
        extraclassName,
        extraElement
    }
)=>{
    return (
        <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {label}
              </label>
              <div className="relative">
                {extraElement}
                <input
                  type={type}
                  value={value}
                  onChange={onChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-secondary-gray border border-secondary-gray/80 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple ${extraclassName}`}
                  placeholder={placeholder}
                  required
                  
                />
              </div>
            </div>
    )
}

export {NormalInput}