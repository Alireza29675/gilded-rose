import { Item } from "@/app/gilded-rose";
import { ItemType } from "@/types";
import getItemType from "@/utils/getItemType";
import oneOf from "@/utils/oneOf";
import clampedText from "@/utils/styling/clampedText";
import tooltipOnHover from "@/utils/styling/tooltipOnHover";
import { useMemo } from "react";
import { styled } from "styled-components";

const itemTypeImageSources = {
  [ItemType.AgedBrie]: "/aged-brie.png",
  [ItemType.BackstagePasses]: "/backstage-passes.png",
  [ItemType.Conjured]: "/conjured.png",
  [ItemType.Sulfuras]: "/sulfuras.png",
}

const regularItemImageSources = Array.from({ length: 5 }, (_, i) => `/regular-${i + 1}.png`);

interface InventoryItemProps {
  item: Item;
  as?: string;
}

export default function InventoryItem({ item, as = 'li' }: InventoryItemProps) {
  const { name, quality, sellIn } = item;

  const type = useMemo(() => getItemType(name), [name]);

  const imageSource = useMemo(() => {
    // Then if it's a regular item, we pick a random image source
    if (type === ItemType.Regular) return oneOf(regularItemImageSources)
    // Otherwise we use the image source from the object
    return itemTypeImageSources[type];
  }, [type]);

  const sellInTooltip = (() => {
    if (type === ItemType.Sulfuras) return `Such a legendary item!`
    if (sellIn > 1) return `Sell in: ${sellIn} days`
    if (sellIn === 1) return `Sell today!`
    return `Was best to sell ${-sellIn + 1} days ago`
  })();

  const qualityTooltip = `Quality: ${quality}`
  const qualityRate = Math.min(1, quality / 50);

  return (
    <ItemBox as={as} image={imageSource} quality={qualityRate}>
      <ItemName>{name}</ItemName>
      <ItemSellIn tooltip={sellInTooltip}>{
        sellIn > 0 ? sellIn + 'd' : 'X'
      }</ItemSellIn>
      <ItemQualityProgressbar tooltip={qualityTooltip} value={qualityRate * 100}>
        <div />
      </ItemQualityProgressbar>
    </ItemBox>
  );
}

const ItemBox = styled.div<{ image: string, quality: number }>`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  list-style: none;
  background-color: var(--background-color);
  background-image: ${props => `url(${props.image})`};
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center 30px;
  position: relative;
  ${props => `filter: grayscale(${1 - props.quality});`}

  &:hover {
    z-index: 2;
  }
`

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  max-width: 100%;
  margin: 0.7rem;
  background-color: var(--background-color);
  ${clampedText(2)}
`

const ItemSellIn = styled.div<{ tooltip: string }>`
  position: absolute;
  bottom: 0.75rem;
  right: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1.4rem;
  cursor: default;
  ${props => tooltipOnHover(props.tooltip)}
`

const getProgressColor = (value: number) => {
  if (value < 20) return '#ff0000'
  if (value < 40) return '#ff8800'
  if (value < 60) return '#aac233'
  if (value < 80) return '#c2af33'
  return '#1ee41e'
}

const ItemQualityProgressbar = styled.div<{ value: number, tooltip: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px;
  background-color: var(--background-color-dark);
  cursor: default;
  z-index: 1;
  ${props => tooltipOnHover(props.tooltip)}

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.value}%;
    height: 100%;
    background-color: ${props => getProgressColor(props.value)};
  }
`