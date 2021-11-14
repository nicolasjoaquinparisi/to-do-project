const useMessage = () => {

    const styles = {
        'success': "bg-success",
        'updated': "bg-success",
        'error': "bg-danger",
        'delete': "bg-warning"
    }

    const messages = {
        'success': "New item added!",
        'updated': "Item updated!",
        'error': "You must enter the name of the task",
        'delete': "Item deleted!"
    }

    const getMessage = type => (
        messages[type]
    )

    const getStyles = type => (
        "text-white p-2 mt-1 mb-2 rounded " + styles[type]
    )

    return {
        getMessage,
        getStyles
    };
}
 
export default useMessage;