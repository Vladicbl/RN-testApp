import { configureStore, createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface IAccountInfo {
    isSignedIn: boolean,
    name : string,
    password : string,
    email : string
    token: string,

    json: {},
}

interface IUserInfo {
    name : string
}

const userInitState: IUserInfo = {
    name: ''
}

const initialState : IAccountInfo = {
    isSignedIn: false,
    name : '111',
    password : '',
    email : '',
    token : '',

    json: ''
}

export const asynkThunk = createAsyncThunk(
    'test/crAsThunk', 
    (args, test) =>{
        console.log('here')
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json)
})

const accountSlice = createSlice({
    name: 'accountInfo',
    initialState,
    reducers : {
        changeName(state, action: PayloadAction<string>) { state.name = action.payload },
        changePassword(state, action) { state.password = action.payload },
        signIn(state, action) {state.token = action.payload},
        signOut(state) {state.token = ''}
    },
    extraReducers: {
        [asynkThunk.fulfilled as any]: (state, action) =>{
            //console.log(action.payload)
            state.json = action.payload
        }
    }
    
})

// const userSlice = createSlice({
//     name: 'userInfo',
//     initialState : userInitState,
//     reducers : {
//         setUser(state, action) {state.name = action.payload}
//     }
// })

export const {changeName, changePassword, signIn, signOut} = accountSlice.actions
// export const {setUser} = userSlice.actions

export const store = configureStore({
    reducer : accountSlice.reducer,
})