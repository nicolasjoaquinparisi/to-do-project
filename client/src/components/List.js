import { useContext } from 'react';

import { ItemsContext } from '../context/ItemsContext';
import { EditContext } from '../context/EditContext';

import NewItem from "./NewItem";
import Item from "./Item";

const List = () => {

    const { items } = useContext(ItemsContext);

    const { itemToEdit, setItemToEdit, setItemTitle } = useContext(EditContext);

    return (
        <div className="mt-5 p-3 border rounded shadow">
            <div className="mb-3">
                <h1 className="fs-3 mb-4">To do list</h1>
                
                {
                    items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))
                }
                
            </div>

            <NewItem />
        </div>
    );
}
 
export default List;