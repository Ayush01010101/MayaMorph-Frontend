import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface initialStateInterface {
    totalimages:number
}

const initialState: initialStateInterface = {
  totalimages:0
}

export const generateimageslength = createSlice({
  name: 'generateimageslength',
  initialState,
  reducers: {
    insertlength:(state:initialStateInterface,action:PayloadAction<number>)=>{
      state.totalimages=action.payload
    }
  },
})

export const {insertlength} = generateimageslength.actions

export default generateimageslength.reducer 