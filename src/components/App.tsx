import { styled } from "styled-components";
import NextDayButton from "./NextDayButton";
import Inventory from "./Inventory/Inventory";

export default function App() {
  return (
    <AppWrapper>
      <Header>
        <RoseImage src="/rose.png" alt="Rose" />
        <Title>Gilded Rose</Title>
      </Header>
      <Inventory />
      <NextDayButton />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  padding: 4em;
  text-align: center;
  max-width: var(--app-max-width);
  margin: 0 auto
`

const Header = styled.header`
  position: relative;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 4rem;
  color: var(--accent-color);
  position: relative;
  z-index: 1;
  margin: 0;
`

const RoseImage = styled.img`
  height: 200px;
`
