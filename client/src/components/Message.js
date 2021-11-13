import { useEffect } from "react";

const Message = ({isError, setShowMessage, successMessage}) => {

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }, []);

    return (
        isError ?
        <p className="bg-danger text-white p-2 mt-1 mb-2">You must enter the name of the task</p>
        :
        <p className="bg-success text-white p-2 mt-1 mb-2">{successMessage}</p>
    );
}
 
export default Message;