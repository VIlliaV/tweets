import { Container, NavStyle } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <ul className="list">
        <li>
          <NavStyle to="/">Home</NavStyle>
        </li>
        <li>
          <NavStyle to="/users">tweets</NavStyle>
        </li>
        <li>
          <NavStyle to="/test">test</NavStyle>
        </li>
      </ul>
    </Container>
  );
};
