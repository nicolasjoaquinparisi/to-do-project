import { useContext } from 'react';

import { EditContext } from '../context/EditContext';
import { ItemsContext } from '../context/ItemsContext';

import axios from 'axios';

const Item = ({item, setShowMessage, setType}) => {

    const { id, name, completed } = item;

    const { itemToEdit, setItemToEdit, setItemTitle } = useContext(EditContext);

    const { setResponse } = useContext(ItemsContext);

    const handleEditClick = () => {

        (itemToEdit.id === item.id) ?
            setItemToEdit({})
        :
            setItemToEdit(item);

        setItemTitle(item.name);

    }

    const sendPutRequest = async() => {
        try {
            const itemUpdated = {
                id: id,
                name: name,
                completed: !completed
            }

            const url = `http://localhost:8080/items/put/completed/${id}`; 
            const response = await axios.put(url, itemUpdated);

            console.log(response);
        }
        catch {
            
        }
    }

    const sendDeleteRequest = async() => {
        try {

            const url = `http://localhost:8080/items/delete//${id}`; 
            const response = await axios.delete(url, id);
            
            setShowMessage(true);
            setResponse(true);
            setType('delete');

            console.log(response);
        }
        catch {
            
        }
    }

    return (
        <div className="row">
            <div className="col">
                <div className="form-check">
                    <input
                        className="form-check-input me-3"
                        type="checkbox"
                        id={id}
                        defaultChecked={completed}
                        value=""
                        onClick={() => sendPutRequest()}
                    />

                    <label
                        className="form-check-label"
                        htmlFor={id}
                    >
                        {name}
                    </label>
                </div>
            </div>

            <div className="col-sm-2">
                <input
                    className="text-primary border-0 bg-transparent"
                    type="button"
                    value="Edit"
                    onClick={() => handleEditClick()}
                >
                </input>
            </div>

            <div className="col-sm-2">
                <input
                    className="text-danger border-0 bg-transparent"
                    type="button"
                    value="Delete"
                    onClick={() => sendDeleteRequest()}
                >
                </input>
            </div>
        </div>
    );
}
 
export default Item;