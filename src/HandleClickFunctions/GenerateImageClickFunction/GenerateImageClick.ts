import React from "react";
import Database from "../../Supabase/Database";
import ImageGenerator from "../../ImageGenerator/ImageGenerator";

type propstype = {
  userdata: any;
  credits: number | undefined;
  Inputs: string;
  Isloading: React.Dispatch<React.SetStateAction<boolean>>;
  setgenerateimg: React.Dispatch<React.SetStateAction<any>>;
  style: string;
  quality: string;
  model: string;
  seterror: React.Dispatch<React.SetStateAction<string>>;
};

const GenerateImageClick = async ({
  userdata,
  credits,
  Inputs,
  Isloading,
  setgenerateimg,
  style,
  quality,
  model,
  seterror,
}: propstype):Promise<boolean | undefined | null> => {
  if (!credits || credits <= 0) {
    seterror("Credit Insufficient");
    return false;
  }

  if (!userdata) {
    Isloading(false);
    return false;
  }

  Isloading(true);

  try {
    const data = await Database.getcredit(userdata.id);

    if (data? data.data?.credits :"") {
      try {
        const res = await ImageGenerator({
          prompt: Inputs,
          seed: parseInt(quality),
          style: style,
        });

        if (!res) {
          seterror("internal server error");
        } else {
        const [url,rawbinarydata]=res
            
          setgenerateimg(url);
          
         try {
           const imageupload:any=await Database.uploadimage(rawbinarydata)
             if(!imageupload){
                 seterror('Failed to store image')
                 return null
             }
           const saveimage=await Database.insertimage(userdata.id,imageupload?.data?.fullPath)
            
             if(saveimage){
              return true
             }
           
         } catch{
            seterror("failed to store image")
         }
        

        }
      } catch (error) {
        seterror("internal server error");
      } finally {
        Isloading(false);
      }
    } 
    else {
      seterror("Credit Insufficient");
      Isloading(false);
      return false;
    }
  } catch (error) {
    seterror("Internal Server Error Try After Some Time");
    Isloading(false);
    return false
  }
};

export { GenerateImageClick };
