import { configureStore, createSlice, PayloadAction, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";

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

interface ICards {
    cards: any[]
}

const initialCards: ICards = {
    cards: []
}

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState : initialCards,
    reducers : {
        setCards(state, action) {state.cards = action.payload},
        unshiftCard(state) {
            state.cards.unshift(state.cards.pop())
        }
    }
})

export const {changeName, changePassword, signIn, signOut} = accountSlice.actions
export const {setCards, unshiftCard} = cardsSlice.actions

export const store = configureStore({
    reducer : combineReducers({
        account: accountSlice.reducer,
        cards: cardsSlice.reducer
    }),
})