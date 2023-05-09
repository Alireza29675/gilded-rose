import { ItemType } from "../types";

// This function is used to determine the type of item based on its name.
export default function getItemType(name: string) {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.match(/aged brie/)) return ItemType.AgedBrie;
  if (lowerCaseName.match(/sulfuras/)) return ItemType.Sulfuras;
  if (lowerCaseName.match(/backstage passes/)) return ItemType.BackstagePasses;
  if (lowerCaseName.match(/conjured/)) return ItemType.Conjured;
  return ItemType.Regular
}