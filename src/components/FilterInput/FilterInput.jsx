import PropTypes from 'prop-types';
import { StyledFilterInput } from './FilterInput.styled';

export const FilterInput = ({ label, value, onChange }) => {
  return (
    <label>
      {label}
      <StyledFilterInput
        type="text"
        name="filter"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

FilterInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
