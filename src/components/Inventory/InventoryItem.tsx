import { Item } from "@/app/gilded-rose";
import { ItemType } from "@/types";
import getItemType from "@/utils/getItemType";
import oneOf from "@/utils/oneOf";
import clampedText from "@/utils/styling/clampedText";
import pixelBordered from "@/utils/styling/pixelBordered";
import tooltipOnHover from "@/utils/styling/tooltipOnHover";
import { useMemo } from "react";
import { styled } from "styled-components";

const itemTypeImageSources = {
  [ItemType.AgedBrie]: "/aged-brie.png",
  [ItemType.BackstagePasses]: "/backstage-passes.png",
  [ItemType.Conjured]: "/conjured.png",
  [ItemType.Sulfuras]: "/sulfuras.png",
}

const regularItemImageSources = [
  '/regular-1.png',
  '/regular-2.png',
]

interface InventoryItemProps {
  item: Item;
}

export default function InventoryItem({ item }: InventoryItemProps) {
  const { name, quality } = item;

  const imageSource = useMemo(() => {
    // First we get the item type
    const type = getItemType(name);
    // Then if it's a regular item, we pick a random image source
    if (type === ItemType.Regular) return oneOf(regularItemImageSources)
    // Otherwise we use the image source from the object
    return itemTypeImageSources[type];
  }, [name]);

  const qualityTooltip = `Quality: ${quality}`

  return (
    <ItemBox image={imageSource}>
      <ItemName>{name}</ItemName>
      <ItemQuality tooltip={qualityTooltip}>{quality}</ItemQuality>
    </ItemBox>
  );
}

const ItemBox = styled.div<{ image: string }>`
  display: flex;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  background-image: ${props => `url(${props.image})`};
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center 30px;
  position: relative;
  ${pixelBordered(6, '#888')}
`

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  max-width: 100%;
  margin: 0.7rem;
  ${clampedText(2)}
`

const ItemQuality = styled.div<{ tooltip: string }>`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--background-color);
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: var(--text-color);
  font-size: 1.6rem;
  font-weight: 500;
  cursor: default;
  ${pixelBordered(2, '#888')}
  ${props => tooltipOnHover(props.tooltip)}
`