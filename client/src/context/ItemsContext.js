import { useState, createContext } from "react"

export const ItemsContext = createContext();

const ItemsProvider = (props) => {

    const [items, setItems] = useState([
        {
            "id": 1,
            "name": "Buy groceries",
            "completed": true
        },
        {
            "id": 2,
            "name": "Prepare weekly report",
            "completed": false
        }
    ]);

    

    return (
        <ItemsContext.Provider
            value={{
                items
            }}
        >
            {props.children}
        </ItemsContext.Provider>
    )
}
export default ItemsProvider;