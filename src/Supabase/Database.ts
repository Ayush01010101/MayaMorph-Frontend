import supabaseClient from "./SupabaseClient";
import {
  PostgrestResponse,
  PostgrestSingleResponse,
} from "@supabase/supabase-js";
import { PostgrestError } from "@supabase/supabase-js";
type promisetype = Promise<object | null>;
type UserCredit = {
  credits: number;
};
interface DatabaseInterface {
  getdata: (userid: string) => promisetype;
  uploadimage: (image: any) => promisetype;
  insertimage: (userid: string, imageurl: string) => promisetype;
  getimages: (userid: string) => promisetype;
  updateCredits: (
    userid: string,
    creditvalue: number
  ) => Promise<PostgrestError | null>;
}

class Database implements DatabaseInterface {
  private client;
  public constructor() {
    this.client = supabaseClient;
  }

  getdata = async (userid: string): Promise<object | null> => {
    const data = this.client.from("users").select().eq("id", userid);

    return data;
  };
  updateCredits = async (
    userId: string,
    creditValue: number
  ): Promise<PostgrestError | null> => {
    const { error } = await this.client
      .from("users")
      .update({ credits: creditValue })
      .eq("id", userId);

    return error;
  };

  //upload image in bucket
  uploadimage = async (file: any): promisetype => {
    const filePath = `public/${Date.now()}.png`;
    const data = this.client.storage.from("images").upload(filePath, file, {
      cacheControl: "3600",
      contentType: "image/png",
      upsert: false,
    });

    return data;
  };

  insertimage = async (userid: string, imageurl: string): promisetype => {
    const data = this.client.from("images").insert({
      userid,
      imageurl,
    });

    return data;
  };

  spendcredit = async (userid:string) => {
    const { error } = await this.client.rpc('decrement_credit', { uid: userid });
    
  };

  getimages = async (userid: string): Promise<PostgrestResponse<{ imageurl: string }>> => {
  const data = await this.client
    .from("images")
    .select("imageurl")
    .eq("userid", userid)
    .order("created_at", { ascending: false }); 

  return data;
};

  getcredit = async (
    userid: string
  ): Promise<PostgrestSingleResponse<UserCredit>> => {
    const data = this.client
      .from("users")
      .select("credits")
      .eq("id", userid)
      .single();
    return data;
  };
}

export default new Database();
