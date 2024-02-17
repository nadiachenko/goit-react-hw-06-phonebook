import shortid from 'shortid';
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    contacts: [],
    filter: ""
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (!state.contacts.some(contact1 => contact1.name === action.payload.name)) {
                    state.contacts.push(action.payload)
                } else {
                    alert(action.payload.name + " is already exist");
                }
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: shortid.generate(),
                        name,
                        number,
                    }
                };
            }
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        getFilterValue: {
            reducer(state, action) {
                state.filter = action.payload.value
            },
            prepare(value) {
                return {
                    payload: {
                        value
                    }
                };
            }
        }
    },
});

const rootReducer = contactsSlice.reducer
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter']
}
export const reducer = persistReducer(persistConfig, rootReducer)
export const { addContact, deleteContact, getFilterValue } = contactsSlice.actions;


