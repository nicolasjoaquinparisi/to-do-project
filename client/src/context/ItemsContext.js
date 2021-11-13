import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const ItemsContext = createContext();

const ItemsProvider = (props) => {

    const [items, setItems] = useState([]);
    const [response, setResponse] = useState(false);

    useEffect(() => {

        const sendRequest = async() => {
            const url = `http://localhost:8080/items`;
            const response = await axios.get(url);
            
            setItems(response.data);

            setResponse(false);
        }
        sendRequest();

    }, [response]);

    return (
        <ItemsContext.Provider
            value={{
                items,
                setItems,
                setResponse
            }}
        >
            {props.children}
        </ItemsContext.Provider>
    )
}
export default ItemsProvider;