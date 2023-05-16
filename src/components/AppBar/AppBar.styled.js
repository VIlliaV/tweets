import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: block;
  padding: 15px;
  margin-bottom: 15px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  background: var(--primary);
  border-bottom: 1px solid var(--primary);
  box-shadow: 1px 1px 1px var(--second);
  & .list {
    display: flex;
    padding-left: 15px;

    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const NavStyle = styled(NavLink)`
  color: var(--shadow);

  &.active {
    padding: 10px;
    color: var(--second);
    background-color: var(--back_primary);
    border: 1px solid var(--second);
    border-radius: 5px;
  }
`;
