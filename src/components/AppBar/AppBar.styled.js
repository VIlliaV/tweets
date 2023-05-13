import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  display: block;
  width: 100%;
  z-index: 1000;
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  padding: 15px;
  margin-bottom: 15px;
  background: var(--primary);
  border-bottom: 1px solid var(--primary);
  box-shadow: 1px 1px 1px var(--second);
  & .list {
    padding-left: 15px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  & li {
  }
`;

export const NavStyle = styled(NavLink)`
  color: var(--shadow);

  &.active {
    color: var(--second);
    padding: 10px;
    background-color: var(--button);
    border: 1px solid var(--second);
    border-radius: 5px;
  }
`;
