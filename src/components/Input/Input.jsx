import PropTypes from 'prop-types';
import { StyledInput, ErrorMessage } from './Input.styled';

export const Input = props => {
  const onChange = event => {
    const inputValue = event.target.value;

    if (props.onChange) {
      props.onChange({
        inputName: name,
        inputValue: inputValue,
      });
    }
  };

  const { type, name, pattern, title, placeholder, required, value } = props;

  return (
    <>
      <StyledInput
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        value={value}
        onChange={onChange}
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
  value: PropTypes.string.isRequired,
};
