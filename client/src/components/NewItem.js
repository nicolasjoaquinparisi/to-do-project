import { useState, useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';

import axios from 'axios';

const NewItem = ({setShowMessage, setType}) => {

    const { setResponse } = useContext(ItemsContext);

    const [item, setItem] = useState({
        name: '',
        completed: false
    });    

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
            setType('success');

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
            setType('error');
            return;
        }

        setType('');
        sendRequest();
    }

    return (
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
                className="w-25 btn btn-primary"
                value="Add"
                onClick={handleClick}
            />
        </div>
    );
}
 
export default NewItem;