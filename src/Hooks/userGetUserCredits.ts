import { useSelector} from "react-redux";
import type { RootState } from "../Redux/Store/Store";
export default function useGetUserCredits():number | undefined{
    const credits:number | undefined=useSelector((state:RootState)=>state.usercredits.credits)
    return credits;
}