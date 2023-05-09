import { useContext } from "react";
import context from "./context";

// React hook to consume the context
export const useInventory = () => useContext(context)

// Export the provider
export { default as InventoryProvider } from "./InventoryProvider"