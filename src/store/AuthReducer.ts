import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserDetails {
  username: string
  password: string
}

export interface AuthInitialState {
  user: UserDetails | null
}

const initialState: AuthInitialState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.user = {
        username: action.payload.username,
        password: action.payload.password
      }
    }
  }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
