import { useSelector} from "react-redux";
import type { RootState } from "../Redux/Store/Store";
import { userstate } from "../Redux/Slices/UserSlice";
import { User as userdatatype } from "@supabase/supabase-js";
export default function useGetUserStoreData():[userdatatype | null, boolean]{
    const Userdata:userstate=useSelector((state:RootState)=>state.user)
    const Userdataobject:userdatatype| null=Userdata.Userdata
    return [Userdataobject,Userdata.islogin]
}