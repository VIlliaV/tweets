import styled from 'styled-components';

export const Container = styled.div`
  padding: 175px 50px;

  & .users_cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
  }
  & ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
    max-width: 1600px;
  }
`;
