import User from "../../Supabase/User.ts"
const LogoutClick=async ()=>{
    await User.logout()
   
}

export default LogoutClick