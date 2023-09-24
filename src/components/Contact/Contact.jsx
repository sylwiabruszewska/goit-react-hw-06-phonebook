import { StyledItem, StyledBox, StyledIcon } from './Contact.styled';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDelete = () => {
    const contactToDelete = contacts.find(contact => contact.id === id);

    if (contactToDelete) {
      dispatch(deleteContact(id));
      Notiflix.Notify.success(`${contactToDelete.name} has been removed`);
    }
  };

  return (
    <StyledItem>
      <StyledBox>
        <StyledIcon icon={faUser} />
        <span>{name}</span>
      </StyledBox>

      <StyledBox>
        <StyledIcon icon={faPhone} />
        <span>{number}</span>
      </StyledBox>
      <Button
        type="button"
        handler={() => handleDelete(id)}
        customcolor="tomato"
      >
        Delete
      </Button>
    </StyledItem>
  );
};
