import { styled } from "styled-components";
import NextDayButton from "./NextDayButton";

const Wrapper = styled.main`
  padding: 4em;
  text-align: center;
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

function App() {
  return (
    <Wrapper>
      <Header>
        <RoseImage src="/rose.png" alt="Rose" />
        <Title>Gilded Rose</Title>
      </Header>

      <NextDayButton />
    </Wrapper>
  );
}

export default App;
