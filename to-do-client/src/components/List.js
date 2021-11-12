import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';

import NewItem from "./NewItem";
import Item from "./Item";

const List = () => {

    const { items } = useContext(ItemsContext);

    return (
        <div className="mt-5 p-3 border rounded w-50 shadow">
            <div className="mb-3">
                <h1 className="fs-3 mb-4">To do list</h1>
                
                {
                    items.map(item => (
                        <Item
                            key={items.id}
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