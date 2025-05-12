import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User as userdatatype } from '@supabase/supabase-js'
export interface userstate {
  Userdata:userdatatype | null,
  islogin:boolean
}

const initialState: userstate = {
  Userdata:null,
  islogin:false
}

export const userdata = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    insertdata:(state:userstate,action:PayloadAction<userdatatype>)=>{
      state.Userdata=action.payload
      state.islogin=true   
    },

    removedata:(state:userstate)=>{
      state.Userdata=null
      state.islogin=false
    }
    

  },
})


export const {insertdata,removedata} = userdata.actions

export default userdata.reducer