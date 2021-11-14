import { useEffect } from "react";

const Message = ({setShowMessage, type}) => {

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

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }, []);

    const getMessage = () => (
        messages[type]
    )

    const getStyles = () => (
        "text-white p-2 mt-1 mb-2 " + styles[type]
    )

    return (
        <p className={getStyles()}>{getMessage()}</p>
    );
}
 
export default Message;