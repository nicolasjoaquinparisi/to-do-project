import { useState, useContext, Fragment } from 'react';
import { ItemsContext } from '../context/ItemsContext';

import Message from './Message';

import axios from 'axios';


const NewItem = () => {

    const { setResponse } = useContext(ItemsContext);

    const [item, setItem] = useState({
        name: '',
        completed: false
    });

    const [error, setError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => {
        setItem({
            ...item, 
            [e.target.name]: e.target.value});
    }

    const sendRequest = async() => {
        try {
            const url = 'http://localhost:8080/post-item'; 
            const response = await axios.post(url, item);

            setResponse(true);
            setError(false);

            setItem({
                name: '',
                completed: false
            });

            console.log(response);
        }
        catch {
            
        }
    }

    const handleClick = () => {

        setShowMessage(true);

        if (item.name.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        sendRequest();
    }

    return (
        <Fragment>
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

            <div className="mb-3 d-flex justify-content-between">
                <input
                    type="text"
                    className="form-control w-75 me-3"
                    placeholder="Item name"
                    value={item.name}
                    name="name"
                    onChange={handleChange}
                />

                <input
                    type="button"
                    className="w-auto btn btn-primary"
                    value="Add"
                    onClick={handleClick}
                />
            </div>
        </Fragment>
    );
}
 
export default NewItem;