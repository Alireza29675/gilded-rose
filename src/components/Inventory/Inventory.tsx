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
  --gap-width: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: var(--gap-width);
  padding: var(--gap-width);
  margin-bottom: 2rem;
  background-color: var(--background-color-dark);
`