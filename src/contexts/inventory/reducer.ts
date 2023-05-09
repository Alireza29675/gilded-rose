import { GildedRose } from "@/app/gilded-rose"
import { Inventory, InventoryAction } from "./types";

export const createGildedRoseReducer = (gildedRose: GildedRose) => {
  return (state: Inventory, action: InventoryAction): Inventory => {
    // As the goblin in the corner of the room is watching, I'm not allowed
    // to change the GildedRose class. So I'm just going to update the items
    // to keep the state in sync.
    gildedRose.items = state.items

    switch (action.type) {
      case 'ADD_ITEM':
        gildedRose.addItem(action.payload.name, action.payload.sellIn, action.payload.quality);
        return {
          ...state,
          items: [...gildedRose.items]
        }

      case 'REMOVE_ITEM':
        gildedRose.removeItem(action.payload.item)
        return {
          ...state,
          items: [...gildedRose.items]
        }

      case 'NEXT_DAY':
        gildedRose.updateQuality()

        return {
          ...state,
          items: [...gildedRose.items]
        }

      default:
        return state
    }
  }
}