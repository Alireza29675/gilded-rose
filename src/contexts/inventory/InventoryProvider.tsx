import { useMemo, useReducer } from 'react';
import context, { initialInventory } from './context';
import { createGildedRoseReducer } from './reducer';
import { GildedRose, Item } from '@/app/gilded-rose';
import { AddItemAction } from './types';

const { Provider } = context;

interface InventoryProviderProps {
  children: React.ReactNode;
}

function InventoryProvider({ children }: InventoryProviderProps) {
  const gildedRose = useMemo(() => new GildedRose(), []);

  const [state, dispatch] = useReducer(
    createGildedRoseReducer(gildedRose),
    initialInventory
  );

  // Inventory methods
  const nextDay = () => dispatch({ type: 'NEXT_DAY' });
  const addItem = (payload: AddItemAction['payload']) => dispatch({ type: 'ADD_ITEM', payload });
  const removeItem = (item: Item) => dispatch({ type: 'REMOVE_ITEM', payload: { item } });


  return (
    <Provider value={{
      ...state,
      nextDay,
      addItem,
      removeItem,
    }}>{children}</Provider>
  );
}

export default InventoryProvider;
