import { styled } from "styled-components";
import Inventory from "./Inventory/Inventory";
import breakpoints from "@/utils/styling/breakpoints";
import pixelBordered from "@/utils/styling/pixelBordered";
import { useInventory } from "@/contexts/inventory";
import getRandomItem from "@/utils/getRandomItem";
import { useCallback } from "react";

export default function App() {
  const { nextDay, addItem } = useInventory();

  const addRandomItem = useCallback(() => {
    const item = getRandomItem();
    addItem(item);
  }, [addItem]);

  return (
    <AppWrapper>
      <Header>
        <RoseImage src="/rose.png" alt="Rose" />
        <Title>Gilded Rose</Title>
      </Header>
      <Inventory />
      <div>
        <Button onClick={addRandomItem}>+</Button>
        <Button onClick={nextDay}>Next Day +1</Button>
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  padding: 4em;
  text-align: center;
  max-width: var(--app-width);
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    max-width: 100%;
    padding: 2rem 0;
  }
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

const Button = styled.button`
  background: var(--secondary-color);
  color: var(--background-color);
  margin: 0 0.6rem;
  padding: 1rem 2rem;
  font-size: 2.5rem;
  cursor: pointer;
  ${pixelBordered(6, 'var(--secondary-color-dark)')}

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.99);
    opacity: 0.8;
  }
`
