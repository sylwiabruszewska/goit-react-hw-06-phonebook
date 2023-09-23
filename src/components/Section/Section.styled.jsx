import styled from 'styled-components';

export const StyledSection = styled.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & h2 {
    margin: 20px 0 10px;
    font-weight: 600;
  }
`;
