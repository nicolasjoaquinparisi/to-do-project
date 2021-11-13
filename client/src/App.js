import ItemsProvider from "./context/ItemsContext";
import EditProvider from './context/EditContext';

import Header from "./components/Header";
import List from "./components/List";
import Edit from "./components/Edit";

function App() {

  return (
    <ItemsProvider>
      <EditProvider>
        <Header />
        
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <List />
            </div>

            <div className="col-sm-4">
              <Edit />
            </div>

          </div>
        </div>
      </EditProvider>
    </ItemsProvider>
  );
}

export default App;
