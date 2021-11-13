import axios from 'axios';

const Item = ({item, itemToEdit, setItemToEdit}) => {

    const { id, name, completed } = item;

    const handleClick = () => {
        (itemToEdit.id === item.id) ? setItemToEdit({}) : setItemToEdit(item);
    }

    const sendRequest = async() => {
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

    const onChangeCheckboxClick = () => {

        sendRequest();
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
                        onClick={() => onChangeCheckboxClick()}
                    />

                    <label
                        className="form-check-label"
                        htmlFor={id}
                    >
                        {name}
                    </label>
                </div>
            </div>

            <div className="col">
                <input
                    className="text-primary border-0 bg-transparent"
                    type="button"
                    value="Edit"
                    onClick={() => handleClick()}
                >
                </input>
            </div>
        </div>
    );
}
 
export default Item;