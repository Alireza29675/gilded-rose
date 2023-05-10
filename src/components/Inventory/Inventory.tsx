import { useRef } from "react";
import { styled } from "styled-components";
import { useDraggable } from "react-use-draggable-scroll";

import InventoryItem from "./InventoryItem";
import { useInventory } from "@/contexts/inventory";
import pixelBordered from "@/utils/styling/pixelBordered";

export default function Inventory() {
  const { items } = useInventory();

  // To enable scrolling by dragging, we need to pass the ref to the element
  const ref = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);

  return (
    <InventoryBox {...events} ref={ref}>
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
  cursor: grab;
  ${pixelBordered()}

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
  }
`

const InventoryList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`