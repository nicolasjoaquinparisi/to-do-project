import { useContext } from 'react';

const ToDoItem = ({item, setItemToEdit}) => {

    const { id, name, completed } = item;

    return (
        <div className="row">
            <div class="col">
                <div className="form-check">
                    <input className="form-check-input me-3" type="checkbox" id={id} defaultChecked={completed} value=""/>
                    <label className="form-check-label" for={id}>{name}</label>
                </div>
            </div>

            <div class="col">
                <input
                    className="text-primary border-0 bg-transparent"
                    type="button"
                    value="Edit"
                    onClick={() => {setItemToEdit(item)}}
                >
                </input>
            </div>
        </div>
    );
}
 
export default ToDoItem;