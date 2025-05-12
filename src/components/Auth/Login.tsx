import React, { useState } from 'react';
import {Chrome, Send } from 'lucide-react';
import { UptoDownPopup } from '../Popups/UptoDownPopup';
import { MoonLoader } from 'react-spinners';
import { NormalInput } from '../Input/CustomInput';
import { GradiantButton } from '../Button/CustomButtons';
import { LoginButtonClick } from '../../HandleClickFunctions/LoginClicksFunction/LoginClick';
import { GoogleLoginButtonClick } from '../../HandleClickFunctions/LoginClicksFunction/LoginClick';
const Login: React.FC = () => {
  const [email, setEmail] = useState<string >('');
  const [showPopup,setShowpopup]=useState<string>("")
  const [isloading,Setisloading]=useState<boolean>(false)

  return (
    <div className='min-h-screen bg-primary-dark text-primary-light font-sans'>
      {showPopup && <UptoDownPopup icon={<Send />} text='verfication link sent sucessfully'/>}
<div className="min-h-screen pt-24 pb-16 flex justify-center items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="bg-secondary-gray/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-300">Join MayaMorph and start creating</p>
          </div>

          <form onSubmit={(e)=>{e.preventDefault()}}  className="space-y-6">
            <NormalInput
            type='text'
            label='Full Name'
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            
                setEmail(e.target.value)
            }}
            placeholder='Email Address'
            extraElement={<Chrome className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />}
            />        


           
            
          <GradiantButton
          text={isloading&& showPopup?"Check Email Inbox": isloading && !showPopup?<MoonLoader size={25}/>:'Send Verification Link'}
          extraclassName={`px-12 py-2 w-full ${showPopup?'opacity-50':""}`}
          type='submit'
          disabled={showPopup?true:false}
          handleclick={async()=>{
            Setisloading(true)
            await LoginButtonClick({setShowpopup,email})
            
          }}
          />
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-secondary-gray/30 text-gray-400">Or continue with    </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={()=>GoogleLoginButtonClick({setShowpopup})}
              className="flex items-center justify-center py-3 px-4 rounded-lg bg-secondary-gray hover:bg-secondary-gray/80 transition-colors"
            >
              <Chrome className="h-5 w-5 mr-2" />
              <span>Google</span>
            </button>
        
          </div>

    
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;