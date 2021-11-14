import { useEffect } from "react";
import useMessage from "../hooks/useMessage";

const Message = ({setShowMessage, type}) => {

    const messageManager = useMessage();
    const { getStyles, getMessage } = messageManager;

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }, []);

    return (
        <p className={getStyles(type)}>{getMessage(type)}</p>
    );
}
 
export default Message;