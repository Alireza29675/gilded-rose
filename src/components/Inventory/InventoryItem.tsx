import { Item } from "@/app/gilded-rose";
import { ItemType } from "@/types";
import getItemType from "@/utils/getItemType";
import oneOf from "@/utils/oneOf";
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
  const { name } = item;

  const imageSource = useMemo(() => {
    // First we get the item type
    const type = getItemType(name);
    // Then if it's a regular item, we pick a random image source
    if (type === ItemType.Regular) return oneOf(regularItemImageSources)
    // Otherwise we use the image source from the object
    return itemTypeImageSources[type];
  }, [name]);

  return (
    <ItemBox>
      <h3>{name}</h3>
      <ItemImage src={imageSource} alt={name} />
    </ItemBox>
  );
}

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`

const ItemImage = styled.img`
  width: 100%;
`