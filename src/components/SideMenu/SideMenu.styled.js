import styled from 'styled-components';
import Select from 'react-select';

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  padding: 15px;

  & Button {
    width: auto;
    margin-bottom: 100px;
  }
`;

export const StyledSelect = styled(Select)`
  padding: 14px 8px;

  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--primary);
  background: var(--second);
  border: 2px outset var(--primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  /* &[data-isfollow='true'] {
      background: #5cd3a8;
    } */
  cursor: pointer;
  :hover {
    background: var(--shadow);
  }
`;
