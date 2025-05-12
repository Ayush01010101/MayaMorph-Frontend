import { 
  SupabaseClient, 
  OAuthResponse as OAuthResponseobject,
  User as user, 
  AuthError
} from "@supabase/supabase-js";
import supabaseclient from "./SupabaseClient";

// type AuthResponse = { data: { user:user | null, session: Session | null }, error: AuthError | null };
type UserResponse = { data: { user:user | null }, error: AuthError | null };
type ErrorResponse = { error: AuthError | null };
interface UserInterface {
  login: (email: string) => Promise<UserResponse>;
  logout: () => Promise<ErrorResponse>;
  getuser: () => Promise<UserResponse>;
  googlelogin: () => Promise<OAuthResponseobject>;
} 


 class User implements UserInterface {
  private client: SupabaseClient;
     constructor() {
    this.client = supabaseclient
  }

  login = async (email: string): Promise<UserResponse> => {
    const userdata = await this.client.auth.signInWithOtp({
      email,
      options:{
        emailRedirectTo:"http://localhost:5173"
      }
    });
    return userdata;
  };

  logout= async ():Promise<ErrorResponse>=>{
    const logout=await this.client.auth.signOut()
    return logout
  }

  getuser=async ():Promise<UserResponse>=>{
    const userdata=await this.client.auth.getUser()
    return userdata
  }


  googlelogin= async ():Promise<OAuthResponseobject>=>{
    const data=await this.client.auth.signInWithOAuth({provider:"google"})
    return data
  }


}


export default new User()