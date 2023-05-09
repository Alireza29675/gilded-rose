import { Item } from "@/app/gilded-rose"

// Action types
export type AddItemAction = {
  type: 'ADD_ITEM'
  payload: {
    name: string
    sellIn: number
    quality: number
  }
}

export type RemoveItemAction = {
  type: 'REMOVE_ITEM'
  payload: {
    item: Item
  }
}

export type NextDayAction = {
  type: 'NEXT_DAY'
}

// Union of all possible actions
export type InventoryAction = AddItemAction | RemoveItemAction | NextDayAction

// Initial inventory data
export type Inventory = {
  items: Item[];
}

// Initial inventory methods
export type InventoryMethods = {
  addItem: (payload: AddItemAction['payload']) => void
  removeItem: (item: Item) => void
  nextDay: () => void
}