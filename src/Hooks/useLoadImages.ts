import Database from "../Supabase/Database"
import { PostgrestResponse } from "@supabase/supabase-js"

const useLoadImages= async (userid:string):Promise<PostgrestResponse<{imageurl:string}>>=>{
   const imagedata= await Database.getimages(userid)

    return imagedata
}

export default useLoadImages