// import { useEffect } from 'react';

import {
  Container,
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from './components/index';

// const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  // mounting phase - aktualizacja danych w state na podstawie danych w local storage
  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (storedContacts) {
  //     setContacts(storedContacts);
  //   }
  // }, []);

  // updating phase - aktualizacja danych w local storage przy update komponentu
  // useEffect(() => {
  //   const serializedContacts = JSON.stringify(contacts);
  //   localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, serializedContacts);

  //   if (contacts.length === 0) {
  //     localStorage.removeItem(CONTACTS_LOCAL_STORAGE_KEY);
  //   }
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <InputField label="Find contacts by name">
          <FilterInput />
        </InputField>
        <ContactList />
      </Section>
    </Container>
  );
};
