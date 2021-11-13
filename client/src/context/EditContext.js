import { useState, createContext } from "react";

export const EditContext = createContext();

const EditProvider = (props) => {

    const [itemToEdit, setItemToEdit] = useState({});
    const [itemTitle, setItemTitle] = useState('');

    return (
        <EditContext.Provider
            value={{
                itemToEdit,
                setItemToEdit,
                itemTitle,
                setItemTitle
            }}
        >
            {props.children}
        </EditContext.Provider>
    )
}
export default EditProvider;