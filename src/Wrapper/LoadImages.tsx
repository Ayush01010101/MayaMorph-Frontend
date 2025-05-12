import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLoadImages from "../Hooks/useLoadImages";
import { insertimages } from "../Redux/Slices/ImagesSlice";
import { useState } from "react";
import { insertlength } from "../Redux/Slices/GenerateImagesLength";
import { PulseLoader } from "react-spinners";
function LoadImages({ children }: { children: ReactNode }): ReactNode {
  const [loading,setloading]=useState(true)
  const dispatch = useDispatch();
  const userid: string = useSelector((state: any) => state?.user?.Userdata?.id);
 
  useEffect(() => {

    if(userid){

      useLoadImages(userid)
      .then((res)=>{
        dispatch(insertimages(res))
        if(res.data){

          dispatch(insertlength(res.data?.length))
        }
        setloading(false)
      })

    }
    else{
      
      setloading(false)
    }
    
  }, []);

  

  return <>{loading ?<div className="flex justify-center items-center bg-[#0E0E0E] h-screen w-full"><PulseLoader color="#A694FF" size={20}/></div>:<>{children}</>}</>;
}

export default LoadImages;
