import { styled } from "styled-components";
import InventoryItem from "./InventoryItem";
import { useInventory } from "@/contexts/inventory";

export default function Inventory() {
  const { items } = useInventory();

  return (
    <InventoryBox>
      <InventoryList>
        {items.map((item, index) => (
          <InventoryItem key={index} item={item} />
        ))}
      </InventoryList>
    </InventoryBox>
  );
}

const InventoryBox = styled.div`
  overflow-x: visible;
  overflow-y: hidden;
  background-color: var(--secondary-color);
  padding: 1rem;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color-dark);
  }
`

const InventoryList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`