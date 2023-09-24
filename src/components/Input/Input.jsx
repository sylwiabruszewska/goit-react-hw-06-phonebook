import PropTypes from 'prop-types';
import { StyledInput, ErrorMessage } from './Input.styled';

export const Input = props => {
  const { type, name, pattern, title, placeholder, required } = props;

  return (
    <>
      <StyledInput
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
      <ErrorMessage>{title}</ErrorMessage>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
