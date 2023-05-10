import { useCallback, useReducer } from 'react';
import context, { initialInventory } from './context';
import reducer from './reducer';
import { AddItemAction } from './types';

const { Provider } = context;

interface InventoryProviderProps {
  children: React.ReactNode;
}

function InventoryProvider({ children }: InventoryProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialInventory);

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
