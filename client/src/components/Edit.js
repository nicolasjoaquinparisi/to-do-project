import { useState, useContext } from 'react';

import { ItemsContext } from '../context/ItemsContext';
import { EditContext } from '../context/EditContext';

import Message from './Message';

import axios from 'axios';

const Edit = () => {

    const { setResponse } = useContext(ItemsContext);

    const { itemToEdit, setItemToEdit, itemTitle, setItemTitle } = useContext(EditContext);

    const [error, setError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => {

        setItemToEdit({
            ...itemToEdit, 
            [e.target.name]: e.target.value});

    }

    const sendRequest = async() => {
        try {
            const url = `http://localhost:8080/items/put/name/${itemToEdit.id}`; 
            const response = await axios.put(url, itemToEdit);

            setResponse(true);
            setError(false);

            setItemTitle(itemToEdit.name);

            console.log(response);
        }
        catch {
            
        }
    }

    const handleClick = () => {

        setShowMessage(true);

        if (itemToEdit.name.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        sendRequest();

    }

    return (
        Object.keys(itemToEdit).length > 0 ?
            <div className="mt-5 p-3 border rounded shadow">

                {
                    showMessage ?
                    <Message
                        isError={error}
                        setShowMessage={setShowMessage}
                        successMessage="Item updated!"
                    />
                    :
                    null
                }

                <h1
                    className="fs-3 mb-4"
                >
                    Editing task
                    <span className="h1 fs-3 fst-italic text-secondary">"{itemTitle}"</span>
                </h1>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Item name"
                    value={itemToEdit.name}
                    name="name"
                    onChange={handleChange}
                />

                <div className="d-flex justify-content-end mt-3">
                    <input
                        type="button"
                        className="btn btn-primary me-3"
                        value="Save"
                        onClick={() => handleClick()}    
                    />

                    <input
                        type="button"
                        className="btn btn-secondary"
                        value="Cancel"
                        onClick={() => {setItemToEdit({})}}
                    />
                </div>
            </div>
        :
            null
    );
}
 
export default Edit;