import { useState } from 'react';
import ItemsProvider from "./context/ItemsContext";

import List from "./components/List";
import Edit from "./components/Edit";

function App() {

  const [itemToEdit, setItemToEdit] = useState({});

  return (
    <ItemsProvider>
      <div class="container">
        <div class="row">
          <div class="col">
            <List 
              setItemToEdit={setItemToEdit}
            />
          </div>

          <div class="col">
            {
              Object.keys(itemToEdit).length > 0 ?
              <Edit
                item={itemToEdit}
                setItemToEdit={setItemToEdit}
              />
              :
              null
            }
          </div>

        </div>
      </div>

      
    </ItemsProvider>
  );
}

export default App;
