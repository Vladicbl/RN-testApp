import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const testAction = createAction('TEST')

export const mainReducer = createReducer({}, {
    [testAction.type] : state => state
})

const store = configureStore({
    reducer : mainReducer
})
