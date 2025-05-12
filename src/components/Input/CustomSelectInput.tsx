type Propstype={
    label: string;
    value: string;
    options: { value: string; label: string; isdisabled?:boolean, }[];
    onChange: (value: string) => void;
    extraclassName?:string,
    disabled?:boolean
   
  }

const CustomSelectInput: React.FC<Propstype> = ({ label,disabled=false, value, options, onChange,extraclassName="" }) => (
    <div className="space-y-2">
      <label  className="block text-sm font-medium text-gray-300">{label}</label>
      <select
      disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-lg bg-secondary-gray border border-secondary-gray/80 text-white focus:outline-none focus:border-primary-purple ${extraclassName}`}
      >
        {options.map((option) => (
          <option disabled={option?.isdisabled}  key={option.value} value={option.value}>
            
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );


  export {CustomSelectInput}