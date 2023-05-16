import styled from 'styled-components';

export const FooterEl = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  color: var(--second);
  background-color: var(--primary);
  border-top: 2px solid var(--second);
  box-shadow: 3px 3px 6px var(--primary);

  & ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      padding: 2px 5px;
      margin-right: 40px;
      :hover {
        color: var(--active);
      }
    }
  }
`;
