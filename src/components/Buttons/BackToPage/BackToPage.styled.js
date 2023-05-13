import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  color: var(--second);
  padding: 10px;
  background-color: var(--button);
  border: 1px solid var(--second);
  border-radius: 5px;
`;
