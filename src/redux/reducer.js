import { combineReducers } from 'redux';

const contactsInitialState = {
  contacts: [
    { id: '0', name: 'Sylwia', number: '123456' },
    { id: '1', name: 'Sylwia Sylwia', number: '234567' },
  ],
};

const contactReducer = (state = contactsInitialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState.filter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return (state = action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
