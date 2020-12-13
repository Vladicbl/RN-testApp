import { configureStore, createAction, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

//export const changeName = createAction('changeName')
//export const changePassword = createAction('changePassword')


interface IAccountInfo {
    name : string,
    password : string,
    email : string
}

const initialState : IAccountInfo = {
    name : '',
    password : '',
    email : ''
}

const accountSlice = createSlice({
    name: 'accountInfo',
    initialState,
    reducers : {
        changeName(state, action: PayloadAction<string>) { state.name = action.payload },
        changePassword(state, action) { state.password = action.payload }
    }
})

// const mainReducer = createReducer(initialState, {
//     [changeName.type] : state => {
//         state.name = 'Name Changed'
//     },
//     [changePassword.type] : state => {
//         state.password = 'Password Changed'
//     }
// })

export const {changeName, changePassword} = accountSlice.actions

export const store = configureStore({
    reducer : accountSlice.reducer
})