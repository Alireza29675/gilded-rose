import { Item } from "@/app/gilded-rose";
import getItemType from "@/utils/getItemType";
import { useMemo } from "react";

interface InventoryItemProps {
  item: Item;
}

function InventoryItem({ item }: InventoryItemProps) {
  const { name } = item;

  const type = useMemo(() => getItemType(name), [name]);

  return (
    <div>{name} {type}</div>
  );
}

export default InventoryItem;
