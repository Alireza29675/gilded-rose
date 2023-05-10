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
        <img src="/rose.png" alt="Rose" />
        <h1>Gilded Rose</h1>
      </Header>
      <Inventory />
      <Footer>
        <Button onClick={addRandomItem} onTouchStart={addRandomItem}>+</Button>
        <Button onClick={nextDay} onTouchStart={nextDay}>Next Day +1</Button>
      </Footer>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: var(--app-width);
  gap: 2.5rem;
  margin: auto;
  padding: 2rem 0;
  padding-top: 4rem;

  @media ${breakpoints.tablet} {
    max-width: 100%;
  }
`

const Header = styled.header`
  position: relative;
  top: 0.5rem;
  text-align: center;

  & > img {
    height: 200px;
  }

  & > h1 {
    font-size: 4rem;
    color: var(--accent-color);
    position: relative;
    z-index: 1;
    margin: 0;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media ${breakpoints.tablet} {
    flex-direction: column;
    align-items: stretch;
    padding: 0 2rem;
  }
`

const Button = styled.button`
  background: var(--secondary-color);
  color: var(--background-color);
  padding: 1rem 2rem;
  font-size: 2.5rem;
  cursor: pointer;
  ${pixelBordered()}

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.99);
    opacity: 0.8;
  }

  @media ${breakpoints.tablet} {
    width: 300px;
    margin: auto;
  }
`
