import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
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
  &[data-isfollow='true'] {
    background: #5cd3a8;
  }
  cursor: pointer;
  :hover {
    background: var(--shadow);
  }
`;
