import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import { BlackButton } from "./Button/CustomButtons";
import { useSelector } from "react-redux";
import ImageCard from "./Cards/ImageCard";
import ImagePopup from "./Popups/ImagePopup";
import { useDispatch } from "react-redux";
import useLoadImages from "../Hooks/useLoadImages";
import { insertimages } from "../Redux/Slices/ImagesSlice";
type imagetype={
  imageurl:string
}
const RecentImages: React.FC = () => {
  const imagedata=useSelector((state: any) => state.imagedata.imagesdata.data)
  const [refresh,setRefresh]=useState(false)
  const [imageurl,setImageurl]=useState<string>('')
  const userid=useSelector((state:any)=>state.user.Userdata.id)
  const dispatch=useDispatch()
  return (
    
    <div className="h-full pt-24 pb-16 ">
      {imageurl && <ImagePopup
      setimage={setImageurl}
      imageurl={imageurl}
      />}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary-gray/30 overflow-auto rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap mb-6">
            <h1 className="text-2xl font-bold">Recent Generations</h1>
              <BlackButton
              handleclick={()=>{
                setRefresh(true)
                useLoadImages(userid)
                .then((res)=>dispatch(insertimages(res)))
                .then(()=>{
                  setRefresh(false)
                })
              }}
              text={<><RefreshCw className={`${refresh?'animate-spin ':""}`}/> Refresh</>}
              extraclassName="flex justify-center items-center gap-2 sm:mt-0 mt-4"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">


             {imagedata.map((image:imagetype,key:number)=>{

                return(
                  <div key={key} onClick={()=>setImageurl(`https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/${image.imageurl}`)}>
                    <ImageCard  key={key}
                imageurl={`https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/${image.imageurl}`}
                />
                  </div>
                )
             })}
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentImages;
