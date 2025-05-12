import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
export interface usercreditstate {
  credits:number | undefined
}

const initialState: usercreditstate = {
    credits:0
}

export const usercreditdata = createSlice({
  name: 'usercreditdata',
  initialState,
  reducers: {
    insertcredit:(state:usercreditstate,action:PayloadAction<PostgrestSingleResponse<{credits:number}>>)=>{
        state.credits=action.payload.data?.credits
    },
    updatecredit:(state:usercreditstate,action:PayloadAction<number>)=>{
      state.credits=action.payload
    }
  },
})


export const {insertcredit,updatecredit} = usercreditdata.actions

export default usercreditdata.reducer