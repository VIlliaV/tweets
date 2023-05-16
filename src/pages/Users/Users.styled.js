import styled from 'styled-components';

export const Container = styled.div`
  padding: 110px 50px 110px;

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
