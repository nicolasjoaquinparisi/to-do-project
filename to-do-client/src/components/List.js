import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';

import NewItem from "./NewItem";
import Item from "./Item";

const List = ({setItemToEdit}) => {

    const { items } = useContext(ItemsContext);

    return (
        <div className="mt-5 p-3 border rounded shadow">
            <div className="mb-3">
                <h1 className="fs-3 mb-4">To do list</h1>
                
                {
                    items.map(item => (
                        <Item
                            key={items.id}
                            item={item}
                            setItemToEdit={setItemToEdit}
                        />
                    ))
                }
                
            </div>

            <NewItem />
        </div>
    );
}
 
export default List;