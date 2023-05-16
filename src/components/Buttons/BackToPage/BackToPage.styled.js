import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  color: var(--second);
  background-color: var(--back_primary);
  border: 1px solid var(--primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
