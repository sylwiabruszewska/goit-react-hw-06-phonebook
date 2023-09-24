import { Contact } from '../index';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  if (!contacts) {
    return null; // loader
  }

  const filteredContacts = contacts.filter(contact => {
    if (!filter) {
      return true;
    }
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
