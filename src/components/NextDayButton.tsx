import { styled } from "styled-components";
import { useInventory } from "@/contexts/inventory";
import pixelBordered from "@/utils/styling/pixelBordered";

const Button = styled.button`
  background: transparent;
  color: var(--accent-color);
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 2rem;
  cursor: pointer;
  ${pixelBordered(4, 'var(--accent-color)')}

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.99);
    opacity: 0.5;
  }
`

export default function NextDayButton() {
  const { nextDay } = useInventory();

  return (
    <Button onClick={nextDay}>
      <span>
        Next Day +1
      </span>
    </Button>
  );
}