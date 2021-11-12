const Edit = ({item, setItemToEdit}) => {
    return (
        <div className="mt-5 p-3 border rounded">
            <h1 className="fs-3 mb-4">Editing task "{item.name}"</h1>
            <input type="text" class="form-control" placeholder="Item name"/>
            <div className="d-flex justify-content-end mt-3">
                <input type="button" className="btn btn-primary me-3" value="Save"/>
                <input type="button" className="btn btn-secondary" value="Cancel" onClick={() => {setItemToEdit({})}}/>
            </div>
        </div>
    );
}
 
export default Edit;