import { useState, useContext, Fragment } from 'react';
import { ItemsContext } from '../context/ItemsContext';

import axios from 'axios';

const Edit = ({item, setItemToEdit}) => {

    const { setResponse } = useContext(ItemsContext);

    const handleChange = e => {

        setItemToEdit({
            ...item, 
            [e.target.name]: e.target.value});

    }

    const sendRequest = async() => {
        try {
            const url = 'http://localhost:8080/post-item'; 
            const response = await axios.post(url, item);

            setItemToEdit({
                name: ''
            });

            console.log(response);
        }
        catch {
            
        }
    }

    const handleClick = () => {


        if (item.name.trim() === '') {
            return;
        }

        sendRequest();

    }

    return (
        <div className="mt-5 p-3 border rounded shadow">
            <h1
                className="fs-3 mb-4">
                Editing task
                <span className="h1 fs-3 fst-italic text-secondary">"{item.name}"</span>
            </h1>

            <input
                type="text"
                className="form-control"
                placeholder="Item name"
                value={item.name}
                name="name"
                onChange={handleChange}
            />

            <div className="d-flex justify-content-end mt-3">
                <input type="button" className="btn btn-primary me-3" value="Save"/>
                <input type="button" className="btn btn-secondary" value="Cancel" onClick={() => {setItemToEdit({})}}/>
            </div>
        </div>
    );
}
 
export default Edit;