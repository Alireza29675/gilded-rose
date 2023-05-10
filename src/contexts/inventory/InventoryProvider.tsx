import { useCallback, useMemo, useReducer } from 'react';
import context, { initialInventory } from './context';
import { createGildedRoseReducer } from './reducer';
import { GildedRose } from '@/app/gilded-rose';
import { AddItemAction } from './types';

const { Provider } = context;

interface InventoryProviderProps {
  children: React.ReactNode;
}

function InventoryProvider({ children }: InventoryProviderProps) {
  // As we want to make the old goblin code compatible with the new one,
  // we need to create a memoized reducer based on the legacy goblin class
  const reducer = useMemo(() => createGildedRoseReducer(new GildedRose()), []);

  const [state, dispatch] = useReducer(
    reducer,
    initialInventory
  );

  // Inventory methods
  const nextDay = useCallback(() => dispatch({ type: 'NEXT_DAY' }), []);
  const addItem = useCallback((payload: AddItemAction['payload']) =>
    dispatch({ type: 'ADD_ITEM', payload })
    , []);

  return (
    <Provider value={{
      ...state,
      nextDay,
      addItem,
    }}>{children}</Provider>
  );
}

export default InventoryProvider;
