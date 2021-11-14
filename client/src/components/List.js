import { useState, useContext } from 'react';

import { ItemsContext } from '../context/ItemsContext';

import NewItem from "./NewItem";
import Item from "./Item";
import Message from './Message';

const List = () => {

    const { items } = useContext(ItemsContext);

    const [showMessage, setShowMessage] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="mt-5 p-3 border rounded bg-light shadow">

            {
                showMessage ?
                <Message
                    isError={error}
                    setShowMessage={setShowMessage}
                    successMessage="New item added!"
                />
                :
                null
            }

            <div className="mt-3 mb-3">
                
                {
                    Object.keys(items).length > 0 ?
                    items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))
                    :
                    <p className="fs-5 text-secondary">At the moment you have no pending tasks</p>
                }
                
            </div>

            <NewItem 
                setShowMessage={setShowMessage}
                setError={setError}
            />
        </div>
    );
}
 
export default List;