import User from "../../Supabase/User";
import React from 'react'

type propstype={
    setShowpopup:React.Dispatch<React.SetStateAction<string>>
    email:string
}
const LoginButtonClick=({setShowpopup,email}:propstype)=>{
    User.login(email)
    .then((data)=>{
        if(!data.error){
            setShowpopup('Verification Link Sent')
            return 

        }
        if(data.error){
            setShowpopup('Failed To Sent Verfication Link')
            return 
        }
    })

}   

const GoogleLoginButtonClick=({setShowpopup}:Partial<propstype>)=>{
    User.googlelogin()  
    .then((data)=>{
        if(!data.error){
            
            return 
        }
        if(data.error){
            setShowpopup && setShowpopup("Failed To Login,Try After Some Time")
            return 
        }
        
    
        
    })
}

export {LoginButtonClick,GoogleLoginButtonClick}