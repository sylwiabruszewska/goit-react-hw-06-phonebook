import { StyledFilterInput } from './FilterInput.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <StyledFilterInput
      type="text"
      name="filter"
      placeholder="Search by name"
      onChange={handleFilterChange}
    />
  );
};
