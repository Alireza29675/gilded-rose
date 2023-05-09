import { useInventory } from "@/contexts/inventory";

function App() {
  const { items } = useInventory();

  return (
    <div>{items.map(i => i.name)}</div>
  );
}

export default App;
