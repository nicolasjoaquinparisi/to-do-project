import ItemsProvider from "./context/ItemsContext";
import List from "./components/List";

function App() {
  return (
    <ItemsProvider>
    <div class="container">
      <List />
    </div>
    </ItemsProvider>
  );
}

export default App;
