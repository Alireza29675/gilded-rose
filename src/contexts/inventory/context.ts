import { createContext } from "react";
import { Inventory, InventoryMethods } from "./types";
import { Item } from "@/app/gilded-rose";

// Initial inventory data
export const initialInventory: Inventory = {
  items: [
    new Item("Regular Item", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Backstage Passes", 5, 7),
    new Item("Sulfuras", 0, 80),
    new Item("Conjured", 3, 6),
    new Item("Conjured", 3, 6),
  ]
}

// Initial inventory methods
const noop = () => { /* do nothing */ }
export const initialInventoryMethods: InventoryMethods = {
  addItem: noop,
  removeItem: noop,
  nextDay: noop,
}

// React context to share the inventory data
export default createContext<Inventory & InventoryMethods>({
  ...initialInventory,
  ...initialInventoryMethods
})