import styled from 'styled-components';

export const Container = styled.div`
  padding: 175px 50px;

  & ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
  }
  & button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 14px 28px;
    gap: 6px;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--primary);
    background: var(--second);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    cursor: pointer;
    :hover {
      background: var(--shadow);
    }
  }
`;
