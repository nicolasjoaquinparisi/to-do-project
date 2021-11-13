const ToDoItem = ({item, itemToEdit, setItemToEdit}) => {

    const { id, name, completed } = item;

    const handleClick = () => {
        (itemToEdit.id === item.id) ? setItemToEdit({}) : setItemToEdit(item);
    }

    return (
        <div className="row">
            <div className="col">
                <div className="form-check">
                    <input className="form-check-input me-3" type="checkbox" id={id} defaultChecked={completed} value=""/>
                    <label className="form-check-label" htmlFor={id}>{name}</label>
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
 
export default ToDoItem;