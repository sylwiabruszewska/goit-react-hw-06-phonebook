import { useState } from 'react';

import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styled';

import { Button, Input } from 'components';

export const ContactForm = props => {
  const [contactData, setContactData] = useState({
    name: '',
    number: '',
  });

  const onChange = ({ inputName, inputValue }) => {
    setContactData(contactData => ({
      ...contactData,
      [inputName]: inputValue,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    props.handleAddNewContact(contactData);
    setContactData({ name: '', number: '' });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Name"
        value={contactData.name}
        onChange={onChange}
        required
      />
      <Input
        label="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with+"
        placeholder="Number"
        value={contactData.number}
        onChange={onChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  handleAddNewContact: PropTypes.func.isRequired,
};
