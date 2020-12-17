import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAccountInfo {
    isSignedIn: boolean,
    name : string,
    password : string,
    email : string
    token: string,
}

const initialState : IAccountInfo = {
    isSignedIn: false,
    name : '',
    password : '',
    email : '',
    token : ''
}

const accountSlice = createSlice({
    name: 'accountInfo',
    initialState,
    reducers : {
        changeName(state, action: PayloadAction<string>) { state.name = action.payload },
        changePassword(state, action) { state.password = action.payload },
        signIn(state, action) {state.token = action.payload},
        signOut(state) {state.token = ''}
    }
})

export const {changeName, changePassword, signIn, signOut} = accountSlice.actions

export const store = configureStore({
    reducer : accountSlice.reducer
})