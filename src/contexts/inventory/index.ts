import { createContext, useContext } from "react";
import { Inventory, InventoryMethods } from "./types";

// Initial inventory data
export const initialInventory: Inventory = {
  items: []
}

// Initial inventory methods
const noop = () => { /* do nothing */ }
export const initialInventoryMethods: InventoryMethods = {
  addItem: noop,
  removeItem: noop,
  nextDay: noop,
}

// React context to share the inventory data
export const context = createContext<Inventory & InventoryMethods>({
  ...initialInventory,
  ...initialInventoryMethods
})

// React hook to consume the context
export const useInventory = () => useContext(context)
