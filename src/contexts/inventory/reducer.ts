import { cloneDeep } from "lodash";
import { GildedRose } from "@/app/gilded-rose"
import { Inventory, InventoryAction } from "./types";

const gildedRose = new GildedRose();

export default (state: Inventory, action: InventoryAction): Inventory => {
  // As the goblin in the corner of the room is watching, I'm don't want
  // to touch the original class. I will use the class as a singleton and
  // clone the items array to avoid mutating the original array.
  gildedRose.items = cloneDeep(state.items);

  switch (action.type) {
    case 'ADD_ITEM':
      gildedRose.addItem(action.payload.name, action.payload.sellIn, action.payload.quality);
      return {
        ...state,
        items: [...gildedRose.items]
      }

    case 'NEXT_DAY':
      gildedRose.updateQuality()

      return {
        ...state,
        items: gildedRose.items
      }

    default:
      return state
  }
}