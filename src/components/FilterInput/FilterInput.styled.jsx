import styled from 'styled-components';

export const StyledFilterInput = styled.input`
  display: block;
  padding: 5px;
  outline: 1px solid #dddddd;
  border: 0;
  margin: 4px 0 20px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:focus {
    outline: 2px solid #71a3ff;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;
