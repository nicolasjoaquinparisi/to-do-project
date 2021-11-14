import { useState, useContext } from 'react';

import { ItemsContext } from '../context/ItemsContext';

import NewItem from "./NewItem";
import Item from "./Item";
import Message from './Message';

const List = () => {

    const { items } = useContext(ItemsContext);

    const [showMessage, setShowMessage] = useState(false);
    const [type, setType] = useState('');

    return (
        <div className="mt-5 p-3 border rounded bg-light shadow">

            {
                showMessage ?
                <Message
                    type={type}
                    setShowMessage={setShowMessage}
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
                            setShowMessage={setShowMessage}
                            setType={setType}
                        />
                    ))
                    :
                    <p className="fs-5 text-secondary">At the moment you have no pending tasks</p>
                }
                
            </div>

            <NewItem 
                setShowMessage={setShowMessage}
                setType={setType}
            />
        </div>
    );
}
 
export default List;