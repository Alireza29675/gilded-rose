import { styled } from "styled-components";
import { useInventory } from "@/contexts/inventory";
import pixelBordered from "@/utils/styling/pixelBordered";

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

const Button = styled.button`
  background: var(--background-color-dark);
  color: var(--background-color);
  margin: 0 1em;
  padding: 0.5em 1em;
  font-size: 2.5rem;
  cursor: pointer;
  ${pixelBordered(6, '#222')}

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.99);
    opacity: 0.8;
  }
`