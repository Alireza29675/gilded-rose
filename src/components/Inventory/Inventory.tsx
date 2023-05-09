import { styled } from "styled-components";
import InventoryItem from "./InventoryItem";
import { useInventory } from "@/contexts/inventory";

export default function Inventory() {
  const { items } = useInventory();

  return (
    <InventoryBox>
      {items.map((item, index) => (
        <InventoryItem key={index} item={item} />
      ))}
    </InventoryBox>
  );
}

const InventoryBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  background-color: var(--background-color-dark);
  padding: 1rem;
`