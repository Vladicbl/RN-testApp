import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAccountInfo {
    isSignedIn: boolean,
    name : string,
    password : string,
    email : string
    token: string,
}

interface IUserInfo {
    name : string
}

const userInitState: IUserInfo = {
    name: ''
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

const userSlice = createSlice({
    name: 'userInfo',
    initialState : userInitState,
    reducers : {
        setUser(state, action) {state.name = action.payload}
    }
})

export const {changeName, changePassword, signIn, signOut} = accountSlice.actions
export const {setUser} = userSlice.actions

export const store = configureStore({
    reducer : accountSlice.reducer
})