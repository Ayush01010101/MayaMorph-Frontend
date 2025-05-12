import { ReactNode,useState,useEffect } from "react";
import User from "../Supabase/User";
import { useDispatch } from "react-redux";
import { insertdata } from "../Redux/Slices/UserSlice";
import { insertcredit } from "../Redux/Slices/UserCreditSlice";
import { PulseLoader } from "react-spinners";
import Database from "../Supabase/Database";
type propstype={
     children:ReactNode
}

function Authcheck({children}:propstype){
    const dispatch=useDispatch()
    const [Loading,setLoading]=useState<boolean>(true)
    
    useEffect(() => {
        const fetchUser = async () => {
          const data = await User.getuser();
          if (data && !data.error && data.data?.user) {
            dispatch(insertdata(data.data.user));
            const creditdata=await Database.getcredit(data.data.user.id)
            dispatch(insertcredit(creditdata))
            setLoading(false)
          }
          else{
            setLoading(false);
          }
    
        };
    
        fetchUser();
      }, [dispatch]);
     
      return (
        <>
            {Loading == false ?children:<div className="flex justify-center items-center bg-[#0E0E0E] h-screen w-full"><PulseLoader color="#A694FF" size={20}/></div>}
        </>
      )
} 

export default Authcheck