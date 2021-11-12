const NewItem = () => {
    return (
        <div class="mb-3 d-flex justify-content-between">
            <input type="text" class="form-control w-75 me-3" placeholder="Item name"/>
            <input type="button" className="w-auto btn btn-primary" value="Add"/>
        </div>
    );
}
 
export default NewItem;