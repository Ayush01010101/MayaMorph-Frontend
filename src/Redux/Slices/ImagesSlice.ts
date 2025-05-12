import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostgrestResponse } from '@supabase/supabase-js'
export interface initialStateInterface {
    imagesdata:PostgrestResponse<{imageurl:string}> | null
}

const initialState: initialStateInterface = {
  imagesdata:null
}

export const imagedataslice = createSlice({
  name: 'imagesdata',
  initialState,
  reducers: {
    insertimages:(state:initialStateInterface,action:PayloadAction<PostgrestResponse<{imageurl:string}>>)=>{
      
      state.imagesdata=action.payload

    }
  },
})

export const {insertimages} = imagedataslice.actions

export default imagedataslice.reducer 