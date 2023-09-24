import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = {
  contacts: [
    { id: '0', name: 'Sylwia', number: '123456' },
    { id: '1', name: 'Sylwia Sylwia', number: '234567' },
  ],
};

export const contactReducer = (
  state = contactsInitialState.contacts,
  action
) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case deleteContact.type:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

export const filterReducer = (state = filterInitialState.filter, action) => {
  switch (action.type) {
    case setFilter.type:
      return (state = action.payload);
    default:
      return state;
  }
};
