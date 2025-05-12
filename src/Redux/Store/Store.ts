import { configureStore } from '@reduxjs/toolkit'
import user from '../Slices/UserSlice'
import usercredits from '../Slices/UserCreditSlice'
import generateimageslength from '../Slices/GenerateImagesLength'
import imagedata from '../Slices/ImagesSlice'
export const store = configureStore({
  reducer: {
    user,
    usercredits,
    imagedata,
    generateimageslength
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch