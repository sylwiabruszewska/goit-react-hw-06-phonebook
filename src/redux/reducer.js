import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = {
  contacts: [
    { id: '0', name: 'Sylwia', number: '123456' },
    { id: '1', name: 'Sylwia Sylwia', number: '234567' },
  ],
};

export const contactReducer = createReducer(contactsInitialState.contacts, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = {
  filter: '',
};

export const filterReducer = createReducer(filterInitialState.filter, {
  [setFilter]: (state, action) => {
    state = action.payload;
  },
});
