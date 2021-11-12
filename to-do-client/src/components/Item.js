const ToDoItem = ({item}) => {

    const { name, completed } = item; 

    return (
        <div className="row">
            <div class="col">
                <div className="form-check">
                    <input className="form-check-input me-3" type="checkbox" id="itemName" checked={completed}/>
                    <label className="form-check-label" for="itemName">{name}</label>
                </div>
            </div>

            <div class="col">
                <input className="text-primary border-0 bg-transparent" type="button" value="Edit"></input>
            </div>
        </div>
    );
}
 
export default ToDoItem;