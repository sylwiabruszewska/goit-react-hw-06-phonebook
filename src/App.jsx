import { useState, useEffect } from 'react';

import {
  Container,
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from './components/index';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // mounting phase - aktualizacja danych w state na podstawie danych w local storage
  useEffect(() => {
    const storedContacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // updating phase - aktualizacja danych w local storage przy update komponentu
  useEffect(() => {
    const serializedContacts = JSON.stringify(contacts);
    localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, serializedContacts);

    if (contacts.length === 0) {
      localStorage.removeItem(CONTACTS_LOCAL_STORAGE_KEY);
    }
  }, [contacts]);

  // dodawanie nowego kontaktu
  const addNewContact = ({ name, number }) => {
    const existingContact = checkIfContactExists(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts([...contacts, newContact]);

      Notiflix.Notify.success('Contact added successfully');
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  // sprawdzanie czy dany kontakt istnieje
  const checkIfContactExists = name =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  //usuwanie kontaktu z listy kontaktów
  const removeContact = id => {
    const removedContact = contacts.find(contact => contact.id === id);

    if (removedContact) {
      setContacts(contacts.filter(contact => contact.id !== id));

      Notiflix.Notify.success(`${removedContact.name} has been removed`);
    }
  };

  // zarządzanie filtrem
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleAddNewContact={addNewContact} />
      <Section title="Contacts">
        <InputField label="Find contacts by name">
          <FilterInput value={filter} onChange={handleFilterChange} />
        </InputField>
        <ContactList contacts={filteredContacts} handleDelete={removeContact} />
      </Section>
    </Container>
  );
};
