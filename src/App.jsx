import {
  Container,
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from './components/index';

export const App = () => {
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
