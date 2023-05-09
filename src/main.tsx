import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import InventoryProvider from './contexts/inventory/InventoryProvider.tsx';

const root = document.querySelector('#root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </React.StrictMode>,
)
